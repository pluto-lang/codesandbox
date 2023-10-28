FROM ubuntu:22.04

RUN apt update && \
    apt install -y curl vim git && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    sudo ./aws/install && \
    curl -fsSL https://get.pulumi.com | sh