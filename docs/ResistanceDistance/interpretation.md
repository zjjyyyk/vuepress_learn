---
title: 电阻距离的各种解释
---



## 网络流解释

引理：设$A_{n\times m}$，$b$在$A$的列空间，$H$是$A$的一个对称广义逆（i.e. $HA=AH$）,那么$z=Hb$是方程$Ax=b$的一个最小范数解。

证明：首先由$AHA=A$，可知$AHAy=Ay$，即$AHb=b$。下面证明$Hb$是最小范数解。

设$y$是$Ax=b$的一个解，$Ay=b$,那么$Hb=HAy$，要证$\Vert HAy\Vert \le \Vert y \Vert$，即$y^TA^TH^THAy \le y^Ty$，由对称性和广义逆定义，等价于$y^THAy \le y^Ty$。由于$(HA)^2=HAHA=HA$，故$HA$幂等，特征值只有$0$或$1$，因此$y^T(I-HA)y \ge 0$成立。

**可以将i与j之间的电阻距离解释为从i到j的单位网络流的最小范数**

对于一个从i点输入，从j点输出的单位网络流，定义一个单位流函数$f:E(G)\rightarrow \mathbf{R}$​，它满足各点处的电流输入输出平衡，即
$$
\begin{aligned}
Q\begin{bmatrix}
f(e_1)\\
f(e_2)\\
\vdots\\
f(e_m)\\
\end{bmatrix}=e_{ij}
\end{aligned}
$$
其中$Q_{n\times m}$是G的顶点-边关联矩阵。定义$\Vert f \Vert=[\sum_{j=1}^mf(e_j)^2]^{\frac{1}{2}}$，由于$L=QQ^T$,$e_{ij}$也在Q的列空间。取Q的Moore-Penrose广义逆$Q^+$，则根据引理，上述方程的解的最小范数为$e_{ij}^T(Q^+)^TQ^+e_{ij}$，而$(Q^+)^TQ^+=(QQ^T)^+=L^+$，因此i到j的电阻距离就是单位网络流的最小范数。

## 随机游动解释

令$P(k)$表示一个粒子从顶点k出发，在移动到j之前移动到i的概率。显然$P(i)=1,P(j)=0$

$P$满足：对于任意$k\in V,k\neq i,j$，$P(k)=\sum_{S\in N(k)}\frac{1}{d_k}P(s)$。令$C$表示将L的第$i,j$行替换成$e_i^T,e_j^T$得到的矩阵，则上式等价于$CP=e_i$。由于$det\;C=det\;L(i,j|i,j)>0$，$P$有唯一解。由Crammer法则，$P(k)=(-1)^{i+k}\frac{det\;L(i,j|k,j)}{det\;L(i,j|i,j)}$。

令$P(i\rightarrow j)$为粒子从i出发，在回到i之前到达j的概率。那么$1-P(i\rightarrow j)=\sum_{k\in N(i)}\frac{1}{d_i}P(k)$​.
$$
\begin{aligned}
1-P(i\rightarrow j)  =& \sum_{k\in N(i)}\frac{1}{d_i}P(k)\\
=&\frac{1}{d_i}\sum_{k\in N(i)}(-1)^{i+k}\frac{det\;L(i,j|k,j)}{det\;L(i,j|i,j)}\\
=&\frac{1}{d_i}\frac{d_idet\;L(i,j|i,j)-det\;L(j|j)}{det\;L(i,j|i,j)}\\
=&1-\frac{1}{d_i}\frac{det\;L(j|j)}{det\;L(i,j|i,j)}\\
=&1-\frac{1}{d_ir(i,j)}
\end{aligned}
$$
因此，$r(i,j)=\frac{1}{d_iP(i\rightarrow j)}$。
