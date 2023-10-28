FROM ubuntu

RUN apt update -y && \
    apt install -y curl vim git unzip && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    curl -fsSL https://get.pulumi.com | sh