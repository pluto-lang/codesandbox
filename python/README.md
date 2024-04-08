# Welcome to Plutolang 👏

This is a [Python templage project for Pluto](http://github.com/pluto-lang/pluto) created using `pluto new`. And there is configuring with one AWS stack for this project.

If you want to develop TypeScript projects,we've also crafted a [TypeScript project template on CodeSandbox](https://codesandbox.io/s/github/pluto-lang/codesandbox/tree/main/typescript) for your convenience.

## Configure

If you're in synced template mode, please click the fork button at the top right corner to first fork this sandbox.

<p align="center">
  <img src="https://github.com/pluto-lang/codesandbox/raw/main/assets/config-aws.png" alt="Configure AWS Certificate" width="400">
</p>

At the bottom section, you'll find a tab called 'Configure AWS Certificate' that's all set for you to fill in, just like in the picture above. You'll need to enter your AWS certificates here so that the application can be smoothly deployed to AWS. You can leave the 'output format' field empty, and once you've entered all other information, you'll see a green checkmark ✔️ next to the tab name.

## Write

Now, you can start writing your application code in the `app/main.py` file.

Inside this file, there is example code that gives developers a basic understanding of how to write code using Pluto. Feel free to modify the code according to your specific requirements.

## Deploy

<p align="center">
  <img src="https://github.com/pluto-lang/codesandbox/raw/main/assets/deploy.png" alt="Pluto Deploy" width="150">
</p>

Once you finish writing the code, you can click on the terminal icon and choose 'Deploy' from the menu. Your application will be deployed to AWS without any additional steps required from you.

If you want to take your application offline, simply choose 'Destroy' from the menu, just like when deploying it. The provisioned resource will be completely deleted.

## More

You can find more example code [here](https://github.com/pluto-lang/pluto/tree/main/examples), including examples in various languages like Python and TypeScript, covering some common use cases:

- Developing a chatbot with session support using AWS services like SageMaker, DynamoDB, Lambda: [Python Version](https://github.com/pluto-lang/pluto/tree/main/examples/langchain-llama2-chatbot-sagemaker-python) / [TypeScript Version](https://github.com/pluto-lang/pluto/tree/main/examples/langchain-llama2-chatbot-sagemaker)
- [Deploy LangServe to AWS with a single click](https://github.com/pluto-lang/pluto/tree/main/examples/langserve-agent-with-history)
- [Deploy FastAPI applications to AWS seamlessly](https://github.com/pluto-lang/pluto/tree/main/examples/fastapi)
- [Deploy a daily joke bot to Slack](https://github.com/pluto-lang/pluto/tree/main/examples/daily-joke-slack)
