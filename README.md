# Help💡
[Q and A🆘](https://github.com/shirota111/origin/blob/main/HELP/QandA.md)


[目次（マニュアル）📕](https://github.com/shirota111/origin/blob/main/HELP/manual.md)


[Project tree🌳](https://github.com/shirota111/origin/blob/main/HELP/projecttree.md)


[用語集💾](https://github.com/shirota111/origin/blob/main/HELP/用語集.md)

[ポートフォリオ💫](https://shirota111.github.io/test.html)




## ポートフォリオ
作成経緯と使用技術

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# 進捗状況

* **1.** 進捗状況の確認と更新状況の告示。作業にかかる状況をわかりやすくまとめます。
* **2.** 目的および手段。得られる効果と手段をまとめます。
* **3.** 開発状況と環境
* **4.** まとめ

## このポートフォリオについて

このテンプレートリポジトリには開発環境と基本セットが用意されており、すぐにカスタマイズとデプロイが可能です。

* **対象者:** ウェブ開発を学びたい、またはポートフォリオサイトを作成したい人
* **必要な経験:** 特に必要ありません。経験や利用可能な時間に応じてカスタマイズできます。
* **必要なツール:** なし。ウェブブラウザさえあれば大丈夫です。
* **前提条件:** なし。このテンプレートには開発環境とデプロイ可能なウェブアプリが含まれています。

### クイックスタート

1. **Use this Template**ボタンをクリックし、**Create a new repository**を選択します。
2. リポジトリ所有者を選択し、リポジトリに一意の名前を付けます。
3. **Code**ボタンをクリックし、**Create Codespace on main**を選択します。
4. [Copilot](https://copilot.github.com)を使用してサイトをカスタマイズします。
5. [ウェブアプリをデプロイします](#-deploy-your-web-application)。

### ウェブアプリのデプロイ

このプロジェクトには、[Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon)または[GitHub Pages](https://pages.github.com/)にデプロイするための設定が含まれています。

#### Azure Static Web Apps

1. Azureアイコンをクリックし、Azureにログインします。
2. **+**ボタンをクリックして**Create Static Web App**を選択します。
3. アプリケーション情報を設定します。
4. デプロイが完了すると、新しい公開アプリケーションを確認できます。

#### GitHub Pages

1. `package.json`を開き、**homepage**と**build-gh**を更新します。
2. `npm run deploy`コマンドを実行します。
3. リポジトリのSettings > PagesでデプロイされたサイトのURLを確認します。

### カスタマイズ

#### AboutMe

`/src/App.jsx`ファイル内の`siteProps`変数を更新します。

```javascript
const siteProps = {
  name: "Nocchi",
  title: "",
  email: "neko2828yama@gmail.com",
  gitHub: "shirota111",
  instagram: "nikomiko25",
  linkedIn: "LinkedInユーザー名",
  medium: "",
  twitter: "nikothewall",
  youTube: "YouTubeユーザー名",
};
```

#### 画像の更新

`/src/Components/Home.jsx`、`/src/Components/About.jsx`、`/src/Components/Portfolio.jsx`内の画像を更新します。

#### ポートフォリオ項目の追加

`/src/Components/Portfolio.jsx`内の`projectList`変数を更新します。

```javascript
const projectList = [
  {
    title: "プロジェクトのタイトル",
    description: "プロジェクトの説明",
    url: "プロジェクトのURL",
  },
];
```
