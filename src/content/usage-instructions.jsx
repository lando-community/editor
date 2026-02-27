import React from "react";

export const usageInstructions = (
  <>
    <p className="mb-4 text-gray-600 dark:text-gray-300">
      The editor validates your Landofile configuration against the{" "}
      <a
        href="https://github.com/lando-community/lando-spec"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#df4090] hover:underline"
      >
        community schema
      </a>
      .
    </p>

    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Working with Files:</h3>
    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-600 dark:text-gray-300">
      <li>Drag & drop, paste, or click Open to load a .lando.yml file</li>
      <li>Save will download as _.lando.yml</li>
      <li>Content auto-formats on load</li>
      <li>Share will generate a URL to share your file</li>
    </ul>

    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Editing Features:</h3>
    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-600 dark:text-gray-300">
      <li>Format with Ctrl+Shift+F or button</li>
      <li>Auto-completion suggestions</li>
      <li>Hover for field descriptions</li>
      <li>Real-time error checking</li>
    </ul>
  </>
);
