# 欢迎来到 Plutolang 👏

这里是一个使用 `pluto new` 命令创建并配置的一个 Pluto 项目，采用的编程语言是 Python，目标平台是 AWS。

如果你想开发 TypeScript 项目，可以访问 [TypeScript 语言的 CodeSandbox](https://codesandbox.io/s/github/pluto-lang/codesandbox/tree/main/typescript)。

## 配置

如果你目前处于模板同步模式，请点击屏幕右上角的分支按钮以首先对这个沙盒进行分支。

<p align="center">
  <img src="https://github.com/pluto-lang/codesandbox/raw/main/assets/config-aws.png" alt="配置 AWS 证书" width="400">
</p>

在页面底部，你可以看到一个 `Configure AWS Certificate` 的标签页，如上图所示。你需要在这里输入你的 AWS 证书信息，以便应用程序能够顺利部署到 AWS 上。你可以不填写 `output format` 字段，填写完其他必要信息后，如果一切正确，你可以在标签名旁边看到一个绿色的勾选标记 ✔️。

## 编程

现在，你可以开始在 `app/main.py` 文件中编写应用程序代码。

在这个文件里，已经有了一些示例代码，可以帮助开发者了解 Pluto 编写代码的基本方式。请根据你的具体需求修改代码。

## 部署

<p align="center">
  <img src="https://github.com/pluto-lang/codesandbox/raw/main/assets/deploy.png" alt="Pluto 部署" width="150">
</p>

编码完成后，你可以点击终端图标并从菜单中选择 `Deploy`。你的应用程序就可以一键直接部署到 AWS 上，不需要你执行任何额外的步骤。

如果你想将应用程序下线，只需从菜单中选择 `Destroy`，配置的资源就会被完全删除。

## 更多

你可以在[这里](https://github.com/pluto-lang/pluto/tree/main/examples)找到更多示例代码，包含了 Python、TypeScript 等不同语言的示例，其中包括一些常见的应用场景：

- 利用 AWS SageMaker、DynamoDB、Lambda 等服务开发一个支持会话的聊天机器人：[Python 版本](https://github.com/pluto-lang/pluto/tree/main/examples/langchain-llama2-chatbot-sagemaker-python) / [TypeScript 版本](https://github.com/pluto-lang/pluto/tree/main/examples/langchain-llama2-chatbot-sagemaker)
- [将 LangServe 一键部署到 AWS 上](https://github.com/pluto-lang/pluto/tree/main/examples/langserve-agent-with-history)
- [将 FastAPI 应用程序一键部署到 AWS 上](https://github.com/pluto-lang/pluto/tree/main/examples/fastapi)
- [部署一个每日笑话 Slack 机器人](https://github.com/pluto-lang/pluto/tree/main/examples/daily-joke-slack)
