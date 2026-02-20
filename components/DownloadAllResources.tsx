'use client';

import { downloadAssets } from '@/data/downloads';

function downloadFile(url: string) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = '';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export default function DownloadAllResources() {
  const handleDownloadAll = async () => {
    for (const asset of downloadAssets) {
      downloadFile(asset.file);
      await new Promise((resolve) => setTimeout(resolve, 220));
    }
  };

  return (
    <section className="section pt-0">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Resource Downloads</h3>
            <p className="mt-1 text-sm text-slate-300">Download individual files or use the bulk action.</p>
          </div>
          <button type="button" onClick={handleDownloadAll} className="rounded-full bg-neon-cyan px-5 py-2 text-sm text-slate-900">
            Download All
          </button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {downloadAssets.map((asset) => (
            <a key={asset.file} href={asset.file} download className="glass rounded-xl px-4 py-3 text-sm hover:border-neon-cyan/60">
              <span className="mr-2 rounded bg-slate-800 px-2 py-1 text-xs text-neon-cyan">{asset.category}</span>
              {asset.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
