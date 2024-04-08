FROM node:20-bullseye

RUN apt update -y && \
    apt install -y curl vim git unzip && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    curl -fsSL https://get.pulumi.com | sh && \
    mv /root/.pulumi/bin/* /usr/local/bin/

RUN apt install -y python3.10 python3-pip python3.10-venv && \
    python3.10 -m pip install --upgrade pip && \
    update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1 && \
    update-alternatives --config python3
