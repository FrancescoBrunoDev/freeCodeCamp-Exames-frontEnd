"use client"

import React, { useState } from "react";
import {remark} from "remark";
import remarkHtml from "remark-html";
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(`# Heading 1

## Heading 2

This is a [link](https://www.example.com).

Here is some \`inline code\`.

\`\`\`
// This is a code block
function example() {
  return "Hello World!";
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Image alt text](https://via.placeholder.com/350x150)

**Bold text**
`);

  const html = remark().use(remarkHtml).use(remarkGfm).use(remarkBreaks).processSync(markdown).toString();

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-5 w-screen h-screen px-5 pt-16 pb-5">
      <div className="bg-white drop-shadow-2xl rounded-lg">
        <textarea
          id="editor"
          className="p-5 h-full w-full rounded-lg dark:text-black"
          onChange={handleMarkdownChange}
          value={markdown}
        ></textarea>
      </div>
      <div
        id="preview"
        className="bg-white drop-shadow-2xl rounded-lg dark:text-black p-5"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ overflowY: "auto" }}
      ></div>
    </div>
  );
}
