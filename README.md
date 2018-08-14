## 帧动画图片拼接

```bash
npm install
```

修改 index.js 中 ```merge('zash_');``` 中的 ```zash_``` 为你的图片前缀，前缀可为空
> 目前代码中写死后缀为 png ，自行修改

> 需保证文件前缀后为数字且按帧顺序编号

> 目前未接入图片压缩工具

```bash
node index.js
```

合成图片已经输出到 ```build```