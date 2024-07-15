コマンドを入力する。

新しいレポジトリを作成する。
cd new-repo

レポジトリのファイル

をステージングする
git add .

コミットする
git commit -m "Reorganize folder structure"

直前のコミットを取り消す:


git reset --hard HEAD^
これで直前のコミットを取り消します。

もし、さらに戻す必要がある場合は、HEAD~2やHEAD~3といった形で指定できます。

もしくは、コミットログを確認して特定のコミットに戻す:

git log

強制プッシュを実行する
以下のコマンドを使用して、ローカルの変更をリモートに強制的にプッシュします。

git push origin main --force


基本的なコマンド
git init: 新しいGitリポジトリを初期化します。
git clone <リポジトリURL>: リモートリポジトリをローカルにクローン（コピー）します。
git status: 作業ディレクトリの状態を表示します。
git add <ファイル>: 変更をステージングエリアに追加します。
git commit -m "メッセージ": ステージングエリアの変更をコミットします。
git log: コミット履歴を表示します。

リモートリポジトリの操作
git remote add origin <リポジトリURL>: リモートリポジトリを追加します。
git push -u origin <ブランチ名>: リモートリポジトリに変更をプッシュします（最初のプッシュ時）。
git push: 変更をリモートリポジトリにプッシュします。
git pull: リモートリポジトリから変更をフェッチしてマージします。

ブランチの操作
git branch: ブランチの一覧を表示します。
git branch <ブランチ名>: 新しいブランチを作成します。
git checkout <ブランチ名>: 指定したブランチに切り替えます。
git checkout -b <ブランチ名>: 新しいブランチを作成し、そのブランチに切り替えます。
git merge <ブランチ名>: 指定したブランチを現在のブランチにマージします。
git branch -d <ブランチ名>: ブランチを削除します。

変更の取り消しと修正
git reset <ファイル>: ステージングエリアからファイルを取り除きます。
git reset --hard: すべての変更を取り消し、コミットされた状態に戻します。
git reset --soft HEAD~1: 最新のコミットを取り消し、ステージングエリアに戻します。
git checkout -- <ファイル>: 作業ディレクトリの変更を取り消します。
git revert <コミットID>: 指定したコミットを元に戻す新しいコミットを作成します。
git commit --amend: 最後のコミットメッセージや内容を修正します。

便利なコマンド
git stash: 作業中の変更を一時的に保存します。
git stash pop: 保存した変更を適用します。
git fetch: リモートリポジトリの変更を取得します（マージはしません）。
git diff: 変更点を表示します。
git show <コミットID>: 指定したコミットの詳細を表示します。

サブモジュール
git submodule add <リポジトリURL>: サブモジュールを追加します。
git submodule init: サブモジュールの初期化を行います。
git submodule update: サブモジュールを更新します。