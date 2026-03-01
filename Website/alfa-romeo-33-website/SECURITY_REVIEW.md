# Security Review (2026-03-01)

## Scope
- React single-page app in `Website/alfa-romeo-33-website`.
- Dependency-chain and client-side hardening review.

## Findings

### 1) Rollup vulnerability exposure through `react-scripts` transitive deps (open)
- **Severity:** High
- **Where:** `react-scripts@5.0.1 -> workbox-build@6.5.4 -> rollup@2.79.1`
- **Related advisories:**
  - DOM clobbering gadget in generated Rollup bundles (XSS risk)
  - Arbitrary file write via path traversal in Rollup 4 advisory family
- **Why this still matters here:** although the app does not use Rollup directly, the transitive dependency tree currently resolves to an old Rollup 2.x version.
- **Immediate mitigation applied:** added npm `overrides` in `package.json` to force `rollup` to `2.79.2` on environments that can install from npm.
- **Residual risk:** full closure may still require moving off legacy `react-scripts`/Workbox chain to a toolchain on maintained Rollup/Webpack versions.

### 2) Reverse tabnabbing risk on external links (fixed)
- **Severity:** Medium
- **Where:** Footer external link used `target="_blank"` with misspelled `rel="noreferer"`.
- **Fix applied:** replaced with `rel="noopener noreferrer"`.

### 3) Third-party iframe hardening gaps (fixed)
- **Severity:** Medium
- **Where:** Vimeo iframe embed in Play section.
- **Fix applied:** added explicit `sandbox`, `referrerPolicy`, and `loading="lazy"`.

### 4) Dependency vulnerability scan blocked by registry policy (open)
- **Severity:** Unknown (audit completeness issue)
- **Where:** `npm audit` and package fetches.
- **Observed errors:**
  - `403 Forbidden - POST https://registry.npmjs.org/-/npm/v1/security/advisories/bulk`
  - `403 Forbidden - GET https://registry.npmjs.org/rollup`

## Remediation Plan

1. **P1: Unblock registry/advisory access in CI and build environments**
   - Fix npm proxy/policy so advisories and package metadata are accessible.
   - Run `npm audit --production` and `npm audit` on each PR.

2. **P1: Re-lock dependencies with Rollup override**
   - After registry access is fixed, run `npm install` to regenerate `package-lock.json` with `rollup@2.79.2` (or newer safe version allowed by toolchain).
   - Verify with `npm ls rollup`.

3. **P1: Remove legacy vulnerable toolchain path**
   - Plan migration away from `react-scripts@5` to a maintained bundler stack (for example Vite or a maintained Webpack setup) so transitive build tooling no longer relies on stale Workbox/Rollup chain.

4. **P2: Keep client-side hardening baseline enforced**
   - Keep explicit iframe sandboxing and safe external-link rel attributes.
   - Add lint/check for `target="_blank"` without `rel="noopener noreferrer"`.

5. **P2: Add security gates**
   - Fail CI on high/critical dependency vulnerabilities (with expiring waivers only).
