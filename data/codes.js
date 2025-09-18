// C++ only data; edit this file to新增/刪除/修改資料。
window.CPP_CODE_DATA = {
  categories: [
    { id: "algo", name: "演算法" },
    { id: "ds",   name: "資料結構" },
    { id: "tpl",  name: "模板 / 工具" }
  ],
  items: [
    {
      category: "tpl",
      title: "Fast IO 模板",
      description: "啟用 sync_with_stdio(false) 與 cin.tie(nullptr) 的基本範本。",
      updated: "2025-09-18",
      tags: ["I/O", "模板", "競程"],
      code:
`#include <bits/stdc++.h>
using namespace std;

int main(){
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int n; if(!(cin >> n)) return 0;
  long long sum = 0;
  for(int i=0;i<n;i++){ int x; cin >> x; sum += x; }
  cout << sum << "\n";
  return 0;
}`
    },
    {
      category: "algo",
      title: "二分搜尋 (lower_bound)",
      description: "在已排序向量中尋找第一個不小於目標的位置。",
      updated: "2025-09-18",
      tags: ["搜尋", "STL"],
      code:
`#include <bits/stdc++.h>
using namespace std;

int main(){
  vector<int> a = {1,2,4,4,5,7};
  int x = 4;
  auto it = lower_bound(a.begin(), a.end(), x);
  cout << (it - a.begin()) << "\n"; // 2
}`
    },
    {
      category: "ds",
      title: "並查集 (DSU)",
      description: "路徑壓縮 + 按秩合併的簡潔實作。",
      updated: "2025-09-18",
      tags: ["UnionFind", "圖論"],
      code:
`#include <bits/stdc++.h>
using namespace std;
struct DSU{
  vector<int> p, r;
  DSU(int n): p(n), r(n,0){ iota(p.begin(), p.end(), 0); }
  int find(int x){ return p[x]==x?x:p[x]=find(p[x]); }
  bool unite(int a, int b){
    a=find(a); b=find(b); if(a==b) return false;
    if(r[a]<r[b]) swap(a,b);
    p[b]=a; if(r[a]==r[b]) r[a]++;
    return true;
  }
};
int main(){
  DSU dsu(10);
  dsu.unite(1,2); dsu.unite(2,3);
  cout << (dsu.find(1)==dsu.find(3)) << "\n"; // 1
}`
    }
  ]
};
