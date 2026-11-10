# kirasuperagent

dsh-superagent 的首单测试仓库。用来验证「GitHub issue → 工单 → PR」的完整链路。

## 结构

```
src/math.js        数学函数（average 有已知 bug）
test/math.test.js  测试用例
```

## 运行测试

```sh
node --test
```

## 说明

- 仓库里不要放任何真实密钥或公司代码
- agent 只对 issue 里明确 @ 它的需求开工
