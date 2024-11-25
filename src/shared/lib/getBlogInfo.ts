//  ブログ情報(title、author、createdDate、file、ID)を取得
import {
  GetPageResponse,
  PageObjectResponse,
  PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints'

import type { NotionPostInfo } from '@/shared/types/types'

import { notion } from './notion/notionClient'

/**
 * 指定されたページIDのブログ情報を取得する非同期関数。
 *
 * @param {string} pageId 取得するブログのページのID。
 * @returns {Promise<NotionPostInfo>} 指定されたページIDのブログ情報を含むPromiseオブジェクト。
 */
export async function getBlogInfo(pageId: string): Promise<NotionPostInfo> {
  // TODO:ここのanyはあやしい
  const response: any = await notion.pages.retrieve({ page_id: pageId })
  const pageInfo = response.properties

  const title = pageInfo.title.title[0]?.plain_text
  const date = pageInfo.createdDate.date?.start
  const author = pageInfo.author.select?.name
  return { title, date, author }
}
