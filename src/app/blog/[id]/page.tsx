// ブログページ
import type { MdStringObject } from 'notion-to-md/build/types'

import { BlogContent } from '@/components/BLogContent/BlogContent'
import { getBlogContents, getBlogInfo } from '@/shared/lib/'

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  // データ取得
  const pageContents: MdStringObject = await getBlogContents(id)
  const pageInfo = await getBlogInfo(id)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BlogContent markdown={pageContents.parent} pageInfo={pageInfo} />
    </div>
  )
}

// 記事ごとの動的なメタデータを生成
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  // データ取得
  const pageContents: MdStringObject = await getBlogContents(id)
  const pageInfo = await getBlogInfo(id)

  return {
    title: pageInfo.title || 'ブログ記事',
    description: pageContents.parent || 'ブログ記事の詳細ページです。'
  }
}
