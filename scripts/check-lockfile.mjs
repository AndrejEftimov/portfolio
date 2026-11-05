import { access, readFile } from 'node:fs/promises'
import { constants } from 'node:fs'

const LOCKFILE = new URL('../package-lock.json', import.meta.url)
const PACKAGE_FILE = new URL('../package.json', import.meta.url)

try {
  await access(LOCKFILE, constants.R_OK)
} catch {
  console.error('Missing package-lock.json. Run npm install locally and commit the generated lockfile before deployment.')
  process.exit(1)
}

const [packageJson, lockfile] = await Promise.all([
  readFile(PACKAGE_FILE, 'utf8').then(JSON.parse),
  readFile(LOCKFILE, 'utf8').then(JSON.parse),
])

const rootLockPackage = lockfile.packages?.['']
const errors = []

if (lockfile.name !== packageJson.name || lockfile.version !== packageJson.version) {
  errors.push('package-lock.json name/version does not match package.json')
}

if (!rootLockPackage) {
  errors.push('package-lock.json is missing its root package metadata')
} else {
  for (const field of ['dependencies', 'devDependencies']) {
    const packageEntries = packageJson[field] ?? {}
    const lockEntries = rootLockPackage[field] ?? {}

    for (const [name, range] of Object.entries(packageEntries)) {
      if (lockEntries[name] !== range) {
        errors.push(`${field}.${name} differs between package.json and package-lock.json`)
      }
    }

    for (const name of Object.keys(lockEntries)) {
      if (!(name in packageEntries)) {
        errors.push(`${field}.${name} exists in package-lock.json but not package.json`)
      }
    }
  }
}

if (errors.length > 0) {
  console.error('Lockfile check failed:\n')
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  console.error('\nRegenerate the lockfile with npm install and commit it with package.json changes.')
  process.exit(1)
}

console.log('package-lock.json matches package.json dependency metadata.')
