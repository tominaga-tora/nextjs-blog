# Notionブログサンプル

## プロジェクト概要

NotionAPIを利用し、Notionで書いた記事をWebアプリで表示することができます。
notion特有のmarkdownにも、基本的な部分は対応しています。

## 使用方法

1. **Notionの登録**:

- Notionへ登録
- テーブルを作成
  - 必要なカラムの登録
  - 型も登録
- データの登録
  - レコードを追加し、各カラムの値を登録
  - titleをクリックして、Notion上で記事を書いてください。
- APIキーの発行
  - 以下インテグレーションを作成し、シークレットキーを手元に保持しておく
    - https://www.notion.so/my-integrations
- テーブルとインテグレーションの接続
  - テーブルの右上のスリードット(・・・)をクリック
  - コネクト> 接続先 > 先ほどのインテグレーション名を選択
- テーブルIDの取得
  - 作成済みのテーブルのURLから取得
  - https://www.notion.so/{テーブルID}?v=xxx
- 環境変数の登録
  - .env.localを作成し、以下へ取得済みの値を貼り付け
  - デプロイして公開する場合、その環境へも登録

### 必要な環境変数(.env.localの中身)

```
# インテグレーションで作成したシークレットキー
NOTION_TOKEN="ntn_xxxxxx"

# テーブルID
TABLE_ID="xxxxx"
```

2. **依存関係のインストール**:

```sh
yarn install
```

3.  **開発サーバーの起動**:

```

yarn dev
```

## その他コマンド

lint チェック(もしまとめて確認したい際は実行)

```
yarn lint
```

コードの整形(vsCode の拡張機能で保存時に自動整形されるよう設定してありますが、一括整形したい際に利用してください。)

```
yarn format
```

ビルドコマンド(コミット前に、実行してビルドエラーがないことの確認をお願いします)

```
yarn build
```

ホットリロードなしでコンパイル後の生成物を動かしたい場合(基本はyarn dev で確認)

```
yarn start
```

## 制作時メモ

### デプロイ

サンプルアプリのため、vercelの予定です。

### 環境変数

前述のとおりです。

### 勉強用に同じアプリを作りたい場合

適宜以下コマンドを利用してください。

```
yarn -v
npm install -g yarn
yarn add -D prettier eslint-config-prettier @typescript-eslint/eslint-plugin @types/react-syntax-highlighter
yarn add @notionhq/client react-markdown react-icons notion-to-md react-syntax-highlighter sass eslint-plugin-prettier eslint-plugin-simple-import-sort
```

## 制作の背景,作った感想

- 勉強会に参加し、NotionAPIを使ったことなかったため作成しました。
- markdownには慣れているものの、Notionの記法自体がmarkdownマークダウンと違ったりするため、表示上の地道な調整がいるなと思いました。

## 公開url
