import { cp, mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'

// Adds a tiny Cloudflare-compatible asset worker without changing the Vite app.
export function sitesOutput(): Plugin {
  return {
    name: 'jameson-sites-output',
    apply: 'build',
    async closeBundle() {
      const root = process.cwd()
      const serverDir = resolve(root, 'dist/server')
      const metadataDir = resolve(root, 'dist/.openai')
      await mkdir(serverDir, { recursive: true })
      await mkdir(metadataDir, { recursive: true })
      await writeFile(resolve(serverDir, 'index.js'), `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404 || request.method !== 'GET') return response
    const accept = request.headers.get('accept') || ''
    if (!accept.includes('text/html')) return response
    const indexUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  }
}\n`)
      try { await cp(resolve(root, '.openai/hosting.json'), resolve(metadataDir, 'hosting.json')) } catch { /* Created during publishing. */ }
    },
  }
}
