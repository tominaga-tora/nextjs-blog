//  ブログの記事（コンテンツ）を取得
import { NotionToMarkdown } from 'notion-to-md'
import type { MdStringObject } from 'notion-to-md/build/types'

import { notion } from './notion/notionClient'

const n2m = new NotionToMarkdown({ notionClient: notion })

/**
 * 指定されたページIDのブログコンテンツを取得する非同期関数。
 *
 * @param {string} pageId 取得するブログのコンテンツのページのID。
 * @returns {Promise<any>} 指定されたページIDのブログコンテンツを含むPromiseオブジェクト。
 */
export async function getBlogContents(pageId: string): Promise<MdStringObject> {
  try {
    const n2m = new NotionToMarkdown({ notionClient: notion })
    // ページのMarkdownを取得
    const mdBlocks = await n2m.pageToMarkdown(pageId)

    // Markdown文字列に変換
    const markdown = n2m.toMarkdownString(mdBlocks)

    return markdown
  } catch (error) {
    console.error('Error converting Notion page to Markdown:', error)
  }
  return { parent: '' } // 空のMarkdownを返す
}
