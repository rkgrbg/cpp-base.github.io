// C++ only data; edit this file to新增/刪除/修改資料。
window.CPP_CODE_DATA = {
  categories: [
    { id: "sctb", name: "學校課本" },
    { id: "ds",   name: "資料結構" },
    { id: "tpl",  name: "模板 / 工具" }
  ],
  items: [
    {
      category: "sctb",
      title: "習題01-1 時間差計算",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "103資能競賽"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int h, m, s;
    int start = 0, end = 0;
    char c;

    cin >> h >> c >> m >> c >> s;
    start += h * 3600 + m * 60 + s;


    cin >> h >> c >> m >> c >> s;
    end += h * 3600 + m * 60 + s;



    start = end - start;
    if(start < 0) start += 86400;
    
    h = start / 3600;
    start %= 3600;
    m = start/60;
    start %= 60;
    s = start;

    cout << setw(2) << setfill('0') << h << ":" << setw(2) << setfill('0') << m << ":" << setw(2) << setfill('0') << s;

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題01-2 成積指標",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "APCS 2016-03-01"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int n;
    cin >> n;

    vector<int> info;

    for(i=0;i<n;i++){
        cin >> k;
        info.push_back(k);
    }

    sort(info.begin(), info.end());

    for(i=0;i<n;i++){
        cout << info[i] << " ";
    }
    cout << "\n";

    int wor = -1, bes = -1;
    bool fbes = false;

    for(auto v : info){
        if(v<60) wor = v;
        else if(!fbes){
            bes = v;
            fbes = true;
        }
    }

    if(wor != -1) cout << wor << "\n";
    else cout << "best case\n";

    if(bes != -1) cout << bes << "\n";
    else cout << "worst case\n";

    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題01-3 雪花片片",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "107資能競賽", "大樹運算"],
      code:
`#include <bits/stdc++.h> 
using namespace std; 
using ll = long long; 



string mul(string a, int k){
    
    if(k == 0) return "0";

    reverse(a.begin(), a.end());

    ll buff = 0;
    string opt;

    for(auto c : a){
        opt.push_back(char((((c - '0')*k)+buff)%10 +'0'));
        buff = (((c - '0')*k)+buff)/10;
    }
    
    while(buff){
        opt.push_back(char((buff%10)+'0'));
        buff /= 10;
    }
    reverse(opt.begin(), opt.end());
    return opt;
}

string add(string a, string b){
    if (a.size() < b.size()) swap(a, b);
    
    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    
    ll buff = 0;
    string opt;
    for(int i=0;i<b.size();i++){
        opt.push_back(char((a[i]-'0' + b[i]-'0' + buff)%10 +'0'));
        buff = (a[i]-'0' + b[i]-'0' + buff)/10;
    }
    for(int i=b.size();i<a.size();i++){
        opt.push_back(char((a[i]-'0'+buff)%10+'0'));
        buff=(a[i]-'0'+buff)/10;
    }
    
    while(buff){
        opt.push_back(char((buff%10)+'0'));
        buff /= 10;
    }
    
    reverse(opt.begin(), opt.end());
    return opt;
}
 


 
int main() 
{ 
    int i, j, k, l = 0, i1, i2, t1, t2; 
    cin.tie(0); 
 ios_base::sync_with_stdio(false);
    
    
    int n;
    cin >> n;
    
    string nv ="1";
    string ans="0";
    
    
    
    for(i=0;i<n;i++){
        ans = add(ans, nv);
        nv = mul(nv, 4);
    }
    
    cout << ans;
    
     
    return 0; 
}`
    },
    {
      category: "sctb",
      title: "習題02-1 找出最小的完全平方數",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "105資能競賽"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

bool ct(int n){

    while(n){
        if((n%10)%2 != 0) return false;
        else n /= 10;
    }

    return true;
}

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int n;
    cin >> n;

    while(n--){

        cin >> k;

        if(k==1){
            cout << 4 << "\n";
            continue;
        }

        if(k%2 == 0){
            for(i = int(pow(10,(k/2)-1) * 4.462224f);i > 0;i+=2){ //sqrt(20)
                if(ct(i*i)){
                    cout << i*i << "\n";
                    break;
                }
            }
        }else{
            for(i = int(pow(10,(k-1)/2) * 1.404204f);i > 0;i+=2){ //sqrt(2)
                if(ct(i*i)){
                    cout << i*i << "\n";
                    break;
                }
            }
        }
    }

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題02-2 一起回家的日期",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "104資能競賽", "最大公因數 gcd", "最小公倍數 lcm"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

//--- gcd & lcm ---//

int gcd(int a, int b){
    while(a != 0){
        if(a < b) swap(a, b);
        a %= b;
    }
    return b;
}

int lcm(int a, int b){
    return a * b / gcd(a, b); // (a/gcd) * (b/gcd) * gcd
}

//--- gcd & lcm ---//


//--- year & date ---//

struct ymd{
    int y;
    int m;
    int d;
};


bool leap(int y){
    return (y%400 == 0) || (y%4 == 0 && y%100 != 0);
}

int mdays(int y, int m){
    static int d[12] = {31,28,31,30,31,30,31,31,30,31,30,31};
    if(m==2 && leap(y)) return 29;
    return d[m-1];
}

ymd date(ymd now_ymd, int days){

    while(days--){
        now_ymd.d++;
        if(now_ymd.d > mdays(now_ymd.y, now_ymd.m)){
            now_ymd.d = 1;
            now_ymd.m++;
        }
        if(now_ymd.m > 12){
            now_ymd.m = 1;
            now_ymd.y++;
        }
    }
    return now_ymd;
}

//--- year & date ---//

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int n;
    cin >> n;


    int days;
    cin >> days;
    n--;

    while(n--){
        cin >> k;
        days = lcm(days, k);
    }

    ymd now_ymd;
    char c;
    cin >> now_ymd.y >> c >> now_ymd.m >> c >> now_ymd.d;

    now_ymd = date(now_ymd, days);
    cout << setw(2) << setfill('0') << now_ymd.y << "/" << setw(2) << setfill('0') << now_ymd.m << "/" << setw(2) << setfill('0') << now_ymd.d << "\n";

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題03-1 費波那契數列",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int f(int n){
    if(n < 0) return -1;
    if(n == 0) return 0;
    if(n == 1 || n == 2) return 1;

    return f(n-1) + f(n-2);
}

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int n;
    while(cin >> n){
        cout << f(n) << "\n";
    }
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題03-1 費波那契數列（測資加強版）",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "大數運算"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

//--- large number operations ---//

string add(string a, string b){

    if(a.size()<b.size()) swap(a, b);

    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());

    ll buff = 0;
    string ans;

    for(int i=0;i<b.size();i++){
        ans.push_back(char( ((a[i]-'0')+(b[i]-'0')+buff)%10 +'0'));
        buff = ((a[i]-'0')+(b[i]-'0')+buff)/10;
    }
    for(int i=b.size();i<a.size();i++){
        ans.push_back(char( ((a[i]-'0')+buff)%10 +'0'));
        buff = ((a[i]-'0')+buff)/10;
    }
    while(buff){
        ans.push_back(char(buff%10 + '0'));
        buff /= 10;
    }

    reverse(ans.begin(), ans.end());
    return ans;
}

//--- large number operations ---//

vector<string> fibonacci_sequence(1001);



string f(int n){
    if(fibonacci_sequence[n] != "") return fibonacci_sequence[n];

    if(fibonacci_sequence[n-1] == "") f(n-1);
    if(fibonacci_sequence[n-2] == "") f(n-2);

    fibonacci_sequence[n] = add(fibonacci_sequence[n-1], fibonacci_sequence[n-2]);

    return fibonacci_sequence[n];
}

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    fibonacci_sequence[0] = "0";
    fibonacci_sequence[1] = "1";
    fibonacci_sequence[2] = "1";

    ll n;
    while(cin >> n){
        cout << f(n) << "\n";
    }
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題03-2 f91",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 10696", "來亂的"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int f91(int n){
    if(n <= 100) return f91(f91(n+11));
    else return (n-10);
}

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    while(cin >> k && k){
        cout << "f91(" << k << ") = " << f91(k) << "\n";
    }
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題03-3 三色河內塔",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "103資能競賽"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int cnt = 0;

void move(int n, char from, char to, char by){
    
    if(n <= 0)
        return;

    move(n-1, from, by, to);
    cout << "ring " << n << " : " << from << " => " << to << "\n";
    cnt++;
    move(n-1, by, to, from);
    return;
}



void distribute(int n, char from, char to, char by){

    if(n <= 0)
        return;
    move(n-1, from, by, to);
    cout << "ring " << n << " : " << from << " => " << to << "\n";
    cnt++;
    distribute(n-2, by, from, to);
    return;
}


int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
	ios_base::sync_with_stdio(false);

    int n;
    cin >> n;

    distribute(n, 'A', 'C', 'B');

    cout << "共需" << cnt << "個移動\n";
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題04-1 促銷活動",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

void discount(double &p1, double &p2){

    if(p1 == p2) p2 /= 2.;
    return;

}

int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    //cin.tie(0);
	//ios_base::sync_with_stdio(false);

    double p1, p2;
    cout << "Original price:\n";
    cin >> p1 >> p2;
    discount(p1, p2);
    cout << "Price after discount:\n";
    cout << p1 << " " << p2 << "\n";
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題04-2 錯誤更正",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 541"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;

    int n;

    while(cin >> n && n){

        bitset<100 +5> list[100 +5];

        for(i=0;i<n;i++){
            for(j=0;j<n;j++){
                bool temp;
                cin >> temp;
                list[i][j] = temp;
            }
        }

        int ce = 0, ces;
        for(i=0;i<n;i++){
            if(list[i].count() % 2){
                ce++;
                ces = i+1;
            }
        }
        int re = 0, res;
        for(i=0;i<n;i++){

            int cnt = 0;
            for(j=0;j<n;j++) cnt += list[j][i];
            if(cnt % 2){
                re++;
                res = i+1;
            }
        }
    
        if(!ce && !re){
            cout << "OK\n";
        }else if(ce == 1 && re == 1){
            cout << "Change bit (" << ces << "," << res << ")\n";
        }else{
            cout << "Corrupt\n";
        }
    }

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題04-3 爺爺種樹",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "105資能競賽"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main()
{
    int i, j, k, l = 0, i1, i2, t1, t2;
    
    bitset<500 +5> info[500 +5];
    int n, m;
    cin >> n >> m;

    int t;
    cin >> t;

    while(t--){
        int x1, x2, y1, y2;
        cin >> x1 >> y1 >> x2 >> y2;

        if(x1 == x2){
            for(i=min(y1,y2);i<=max(y1,y2);i++){
                info[x1][i] = 1;
            }
        }else if(y1 == y2){
            for(i=min(x1,x2);i<=max(x1,x2);i++){
                info[i][y1] = 1;
            }
        }else if((x1 > x2 && y1 < y2) || (x1 < x2 && y1 > y2)){
            for(int xi=min(x1, x2), yi=max(y1, y2) ; xi<=max(x1, x2) && yi>=min(y1, y2) ; xi++, yi--){
                info[xi][yi] = 1;
            }
        }else if((x1 < x2 && y1 < y2) || (x1 > x2 && y1 > y2)){
            for(int xi=max(x1, x2), yi=max(y1, y2) ; xi>=min(x1, x2) && yi>=min(y1, y2) ; xi--, yi--){
                info[xi][yi] = 1;
            }
        }
    }
    int cnt = 0;
    for(i=1;i<=n;i++){
        cnt += info[i].count();
    }
    cout << cnt;
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題05-1 祕宓差",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "APCS 2017-03-01"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
    ios_base::sync_with_stdio(false);

    string num;
    cin >> num;

    bool dou = false;
    ll ans=0;
    for(auto c : num){
        if(dou) ans += c -'0';
        else ans -= c -'0';
        dou = !dou;
    }

    cout << abs(ans);

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題05-2 ROT13",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
    ios_base::sync_with_stdio(false);

    string str;
    getline(cin, str);

    for(int i=0;i<str.size();i++){
        if(isupper(str[i])) str[i] = char((str[i] - 'A' + 13)%26 + 'A');
        else if(islower(str[i])) str[i] = char((str[i] - 'a' + 13)%26 + 'a');
    }

    cout << str;

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題05-3 跑長編碼與資料壓縮",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "106資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    cin.tie(0);
    ios_base::sync_with_stdio(false);

    int n;
    cin >> n;
    cin.ignore();
    while(n--){

        string str;
        bool err = false;
        getline(cin, str);

        if(str[0] != '0' && str[0] != '1'){
            cout << "-1\n";
            continue;
        }
        bool nv = !(str[0]-'0');
        bitset<3> time;
        vector<bool> res;
        bool data_alive = false;
        for(auto c : str){
            if(c != '0' && c != '1'){
                err = true;
                cout << "-1\n";
                break;
            }
            if(c-'0' == nv && data_alive && time.count()<3){
                unsigned long val = time.to_ulong();
                val++;
                time = bitset<3>(val);
            }else{
                if(time.count() != 0){
                    res.push_back(nv);
                    res.push_back(time[2]);
                    res.push_back(time[1]);
                    res.push_back(time[0]);
                }
                nv = c - '0';
                time = bitset<3>(1);
                data_alive = true;
            }
        }
        if(err) continue;
        res.push_back(nv);
        res.push_back(time[2]);
        res.push_back(time[1]);
        res.push_back(time[0]);

        for(i=0;i<res.size();i+=4) cout << res[i] << res[i+1] << res[i+2] << res[i+3] << " ";

        cout << int(float(res.size()) / float(str.size()) *100 +0.5) << "%\n";
    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題06-1 多邊形面積",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

struct Point
{
    float x, y;
};


float a(vector<Point> &p){
	float area = 0.0;
	for (int i=p.size()-1, j=0; j<p.size(); i=j++)
	{
		area += p[i].x * p[j].y;
		area -= p[i].y * p[j].x;
	}
    return float(fabs(area) / 2.0);
}



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    vector<Point> p;
    
    int n;
    cin >> n;

    float f1, f2;

    for(i=0;i<n;i++){
        cin >> f1 >> f2;
        p.push_back({f1,f2});
    }

    cout << float(a(p));

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題06-2 99遊戲",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "104資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    queue<char> info[4];
    

    for(i=0;i<4;i++){
        string s;
        cin >> s;
        for(j=0;j<13;j++){
            cin >> s;
            if(s != "10") info[i].push(s[0]);
            else info[i].push('0');
        }
    }


    vector<int> list = {0, 1, 2, 3};
    int who = 0;

    int point[4] = {0};

    while(1){
        switch(info[list[who]].front()){
            case 'A':{
                point[list[who]] = 0;
                break;
            }
            case '4':{
                reverse(list.begin(), list.end());
                who = 3 - who;
                break;
            }
            case '5':{
                break;
            }
            case '0':{ //10
                if(point[list[who]] + 10 > 99) point[list[who]] -= 10;
                else point[list[who]] += 10;
                break;
            }
            case 'J':{
                break;
            }
            case 'Q':{
                if(point[list[who]] + 20 > 99) point[list[who]] -= 20;
                else point[list[who]] += 20;
                break;
            }
            case 'K':{
                point[list[who]] = 99;
                break;
            }
            default:{
                point[list[who]] += info[list[who]].front() - '0';
            }
        }

        info[list[who]].pop();


        if(point[list[who]] > 99){
            switch(list[who]){
                case 0:{
                    cout << "A\n";
                    break;
                }
                case 1:{
                    cout << "B\n";
                    break;
                }
                case 2:{
                    cout << "C\n";
                    break;
                }
                case 3:{
                    cout << "D\n";
                    break;
                }
            }
            cout << info[list[who]].size();
            break;
        }

        if(info[list[who]].empty()){
            switch(list[who]){
                case 0:{
                    cout << "A\n";
                    break;
                }
                case 1:{
                    cout << "B\n";
                    break;
                }
                case 2:{
                    cout << "C\n";
                    break;
                }
                case 3:{
                    cout << "D\n";
                    break;
                }
            }
            cout << point[list[who]];
            break;
        }

        who++;
        who %= 4;
    }
    
    
    
    


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題07-1 後序式求值",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    string info;
    cin >> info;

    stack<int> situ;

    for(auto c : info){

        switch(c){
            case '+':{
                int a, b;
                a = situ.top();
                situ.pop();
                b = situ.top();
                situ.pop();
                situ.push(b + a);
                break;
            }
            case '-':{
                int a, b;
                a = situ.top();
                situ.pop();
                b = situ.top();
                situ.pop();
                situ.push(b - a);
                break;
            }
            case '*':{
                int a, b;
                a = situ.top();
                situ.pop();
                b = situ.top();
                situ.pop();
                situ.push(b * a);
                break;
            }
            case '/':{
                int a, b;
                a = situ.top();
                situ.pop();
                b = situ.top();
                situ.pop();
                situ.push(b / a);
                break;
            }
            case '%':{
                int a, b;
                a = situ.top();
                situ.pop();
                b = situ.top();
                situ.pop();
                situ.push(b % a);
                break;
            }
            default :{
                situ.push(c-'0');
                break;
            }
        }
    }

    cout << situ.top();

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題07-2 中置式(infix)轉後置式(postfix)",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "103資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

string info;

string to_posfix(int op, int ed){

    string ans;
    queue<char> bigger_cache, lower_cache;

    for(int i=op;i<ed;i++){
        
        if(info[i] == ')') continue;

        if(info[i] == '('){
            
            int cnt = 1, j;

            for(j=i+1;j<ed;j++){
                if(info[j] == '(') cnt++;
                else if(info[j] == ')') cnt--;
                if(!cnt) break;
            }

            ans += to_posfix(i+1, j);
            i = j;

        }else if(info[i] == '+' || info[i] == '-'){

            while(!bigger_cache.empty()){
                ans += bigger_cache.front();
                bigger_cache.pop();
            }
            while(!lower_cache.empty()){
                ans += lower_cache.front();
                lower_cache.pop();
            }
            lower_cache.push(info[i]);

        }else if(info[i] == '*' || info[i] == '/' || info[i] == '%'){

            while(!bigger_cache.empty()){
                ans += bigger_cache.front();
                bigger_cache.pop();
            }
            bigger_cache.push(info[i]);

        }else{
            ans += info[i];
        }
    }

    while(!bigger_cache.empty()){
        ans += bigger_cache.front();
        bigger_cache.pop();
    }
    while(!lower_cache.empty()){
        ans += lower_cache.front();
        lower_cache.pop();
    }

    return ans;

}


int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    
    getline(cin, info);

    cout << to_posfix(0, info.size());
    
    


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題07-3 括號問題",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "104資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    
    string info;
    cin >> info;

    int cnt = 0, situ = 0;

    for(auto c : info){
        if(c == '('){
            situ++;
            cnt++;
        }
        else situ--;
    }

    if(!situ){
        cout << cnt;
    }else{
        cout << 0;
    }
    


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題07-5 印表機佇列",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 12100"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;



    int T;

    cin >> T;

    while(T--){
        
        int n, m;
        cin >> n >> m;

        queue<pair<int, bool>> info;
        vector<int> things(10);

        for(i=0;i<n;i++){
            cin >> k;
            things[k]++;
            if(i != m) info.push({k, 0});
            else  info.push({k, 1});
        }

        int cnt = 0;

        while(1){

            bool can_print = 1;
            for(i=info.front().first+1;i<10;i++){
                if(things[i]){
                    can_print = 0;
                    break;
                }
            }

            if(can_print){
                
                cnt++;
                if(info.front().second) break;
                else{
                    things[info.front().first]--;
                    info.pop();
                }

            }else{
                info.push(info.front());
                info.pop();
            }
        }


        cout << cnt << "\n";

    }

    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題08-1 小球落下",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 679"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

bitset<1048576> tree;

int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    int T;
    cin >> T;
    while(T--){

        tree.reset();

        int D, I;
        cin >> D >> I;

        int CriticalValue = (1 << (D-1));
        int nl;

        while(I--){
            
            nl = 1;
            while(nl < CriticalValue){
                if(tree[nl]){
                    tree[nl] = ! tree[nl];
                    nl = 2*nl + 1;
                }else{
                    tree[nl] = ! tree[nl];
                    nl *= 2;
                }
            }
        }




        cout << nl << "\n";
    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題08-2 二元搜尋樹高度",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

struct node
{
    int data, h;
    node *left = nullptr, *right = nullptr;
};



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    



    cin >> k;
    node * root = new node{k, 1, nullptr, nullptr};
    

    int mh = 1;
    
    while(cin >> k){

        auto it = root;
        

        while(1){
            if(k > it -> data){
                if(it -> right != nullptr){
                    it = it -> right;
                }else{
                    it -> right = new node{k, it -> h + 1, nullptr, nullptr};
                    mh = max(it -> h + 1, mh);
                    break;

                }
            }else{
                if(it -> left != nullptr){
                    it = it -> left;
                }else{
                    it -> left = new node{k, it -> h + 1, nullptr, nullptr};
                    mh = max(it -> h + 1, mh);
                    break;
                }
            }
        }

        


    }

    
    
    cout << mh;


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題08-3 血緣關係",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "APCS 2016-03-04"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

vector<int> t[100000];
bitset<100000> vis;

int md = 0, wmd;

void dfs(int u, int d){

    vis[u] = 1;

    if(d > md){
        md = d;
        wmd = u;
    }


    for(auto v : t[u]){
        if(!vis[v]){
            dfs(v, d+1);
        }
    }

    return;
}


int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    int n;
    cin >> n;

    for(i=0;i<n-1;i++){
        cin >> t1 >> t2;
        t[t1].push_back(t2);
        t[t2].push_back(t1);
    }

    dfs(0,0);

    md = 0;
    vis.reset();

    dfs(wmd,0);

    cout << md;
    
    


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題09-1 城市旅遊",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

vector<int> t[800 +5];
bitset<800 +5> vis;

void dfs(int u){

    vis[u] = 1;
    for(auto v : t[u]){
        if(!vis[v]){
            dfs(v);
        }
    }

    return;

}



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    int n, m;
    cin >> n >> m;

    for(i=0;i<m;i++){
        cin >> t1 >> t2;
        t[t1].push_back(t2);
    }

    int a, b;
    cin >> a >> b;

    dfs(a);
    
    if(vis[b]) cout << "Yes";
    else cout << "No";

    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題09-2 油田",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 572"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

int m, n;
char oil[100][100];
bitset<10000> vis;


void dfs(int x, int y){

    vis[x *n+ y] = 1;
    
    if(x+1 < m  && y+1 < n && oil[x+1][y+1] =='@' && !vis[(x+1) *n+ y+1]){
        dfs(x+1, y+1);
    }
    if(x+1 < m  && y-1 > -1 && oil[x+1][y-1] =='@' && !vis[(x+1) *n+ y-1]){
        dfs(x+1, y-1);
    }
    if(x-1 > -1  && y+1 < n && oil[x-1][y+1] =='@' && !vis[(x-1) *n+ y+1]){
        dfs(x-1, y+1);
    }
    if(x-1 > -1  && y-1 > -1 && oil[x-1][y-1] =='@' && !vis[(x-1) *n+ y-1]){
        dfs(x-1, y-1);
    }
    if(y+1 < n && oil[x][y+1] =='@' && !vis[x *n+ y+1]){
        dfs(x, y+1);
    }
    if(y-1 > -1 && oil[x][y-1] =='@' && !vis[x *n+ y-1]){
        dfs(x, y-1);
    }
    if(x+1 < m && oil[x+1][y] =='@' && !vis[(x+1) *n+ y]){
        dfs(x+1, y);
    }
    if(x-1 > -1 && oil[x-1][y] =='@' && !vis[(x-1) *n+ y]){
        dfs(x-1, y);
    }


}

int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    char c;

    while(cin >> m >> n && m && n){


        int cnt = 0;

        for(i=0;i<m;i++){
            for(j=0;j<n;j++){
                cin >> oil[i][j];
            }
        }

        for(i=0;i<m;i++){
            for(j=0;j<n;j++){
                if(oil[i][j] == '@' && !vis[i *n+ j]){
                    dfs(i, j);
                    cnt++;
                }
                
            }
        }

        cout << cnt << "\n";


        vis.reset();
    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題09-3 小群體",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "APCS 2017-03-02"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

vector<int> t[100000];
bitset<100000> vis;


void bfs(int u){

    queue<int> q;

    q.push(u);
    vis[u] = 1;

    while(!q.empty()){

        for(auto v : t[q.front()]){
            if(!vis[v]){
                q.push(v);
                vis[v] = 1;
            }
        }

        q.pop();

    }


}


int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    int n;
    cin >> n;

    for(i=0;i<n;i++){
        cin >> t1;
        t[i].push_back(t1);
        t[t1].push_back(i);
    }

    int cnt = 0;

    for(i=0;i<n;i++){
        if(!vis[i]){
            bfs(i);
            cnt++;
        }
    }

    cout << cnt;


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題10-1 連號或不連號",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "106資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    
    int n;
    cin >> n;


    vector<int> info;
    for(i=0;i<n;i++){
        cin >> k;
        info.push_back(k);
    }


    sort(info.begin(), info.end());

    cout << info[0] << " " << info[n-1] << " ";

    for(i=0;i<n;i++){
        if(i-1 >= 0 && info[i-1] +1 != info[i]){
            cout << "no";
            return 0;
        }
    }

    cout << "yes";

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題10-2 字元頻率",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 10062"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

bool cmp(const pair<int,char> &a, const pair<int,char> &b){

    /*
    if(a.first != b.first) return a.first < b.first;
    else return a.second > b.second;
    */

    return (a.first != b.first) ? (a.first < b.first) : (a.second > b.second);
}



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;

    string s;
    bool first_case = true;
    while(getline(cin, s)){

        if(!first_case) cout << "\n";
        first_case = 0;

        sort(s.begin(), s.end());

        vector<pair<int,char>> items;

        for(auto c : s){
            if(items.size() == 0 || items[items.size()-1].second != c){
                items.push_back({1, c});
            }else{
                items[items.size()-1].first++;
            }
        }

        sort(items.begin(), items.end(), cmp);

        for(auto p : items){
            cout << int(p.second) << " " << p.first << "\n";
        }

    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題10-3 Agar.io",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "104資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    

    int n, m;

    cin >> n >> m;

    vector<int> balls;
    int value[10000] = {0};

    for(i=0;i<m;i++){
        cin >> t1 >> t2;

        if(value[t1] == 0){
            value[t1] = 10;
            balls.push_back(t1);
        }

        if(value[t2] == 0){
            value[t2] = 10;
            balls.push_back(t2);
        }

        if(value[t1] > value[t2])
            value[t1] += value[t2];

        else if(value[t1] < value[t2])
            value[t2] += value[t1];

        else
            value[t1] += value[t2];

        
    }

    cout << ((value[t1] > value[t2]) ? t1 : t2) << "\n";
    
    sort(balls.begin(),balls.end());

    for(auto b : balls) cout << b << " ";

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題11-1 二分搜尋",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, i1, i2, t1, t2;
    
    
    int n;
    cin >> n;

    int info[10000];
    for(i=0;i<n;i++) cin >> info[i];

    int search;
    cin >> search;

    int l = 0, r = n, mid, cnt = 0;

    while( l < r ){
        cnt++;
        mid = l + (r-l)/2;


        if(info[mid] == search){
            cout << mid+1 << " " << cnt;
            return 0;
        }else if(info[mid] < search){
            l = mid+1;
        }else{
            r = mid;
        }

    }

    cout << "Error of not found.";

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題11-2 二分法求解",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

double f(double x){

    return 2.0 - exp(x);
}



int main(){

    int i, j, k, i1, i2, t1, t2;
    
    const double TOL = 1e-8;


    double l = 0.0, r = 1.0;

    double mid;

    while((r-l)/2.0 > TOL){
        mid = (r+l)/2.0;
        if(f(mid) == 0.0) break;
        if(f(l) * f(mid) < 0) r = mid;
        else l = mid;
    }

    mid = (l+r) / 2.0;

    cout << fixed << setprecision(8) << mid;
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題11-3 人員調動",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "107資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;


    int N;
    cin >> N;
    while(N--){

        vector<int> info[1000];

        int m, cnt = 0;
        cin >> m;

        for(i=0;i<m;i++){
            int a, b;
            cin >> a >> b;

            bool ex = 0;

            for(j=0;j<info[b].size();j++){
                if(info[b][j] == a){
                    cnt++;
                    info[b][j] = -1;
                    ex = 1;
                    break;
                }
            }

            if(!ex){
                info[a].push_back(b);
            }
        }

        cout << cnt << "\n";

    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題12-1 最大乘積",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 11059"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    int n;
    while(cin >> n){
        l++;
        vector<int> info;

        for(i=0;i<n;i++){
            cin >> t1;
            info.push_back(t1);
        }

        ll ans = LLONG_MIN;

        for(i=0;i<n;i++){
            for(j=0;j<n;j++){ //meaning i to j multiply
                
                ll nv = 1;
                
                for(k=i;k<=j;k++){
                    nv *= info[k];
                }

                ans = max(ans, nv);
            }
        }
        

        if(ans < 0)
            cout << "Case #" << l << ": The maximum product is " << 0 << ".\n\n";
        
        else
            cout << "Case #" << l << ": The maximum product is " << ans << ".\n\n";
    }

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題12-1 最大乘積（測資加強版）",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 11059", "Kadane演算法"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    int n;
    while(cin >> n){
        l++;
        vector<ll> info;

        for(i=0;i<n;i++){
            cin >> t1;
            info.push_back(t1);
        }

        ll maxProd = 1, minProd = 1, ans = LLONG_MIN;

        for(auto x : info){

            if(x < 0) swap(maxProd, minProd);

            maxProd = max(x, maxProd * x);
            minProd = min(x, minProd * x);

            ans = max(maxProd, ans);
            
        }
        

        if(ans < 0)
            cout << "Case #" << l << ": The maximum product is " << 0 << ".\n\n";
        
        else
            cout << "Case #" << l << ": The maximum product is " << ans << ".\n\n";
    }

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題12-2 回文日期問題",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "106資能競賽"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;

const int days[12] = {31,28,31,30,31,30,31,31,30,31,30,31};


int rt(string time){

    if(time.size() == 6){

        if (time[2] != time[3]) return 0;
        if (!(time[4]-'0') || !(time[5]-'0')) return 0;

        return 1;

    }else if(time.size() == 7){
        
        int cnt = 0;

        // 1 - 2

        int day = (time[5]-'0')*10+time[6]-'0';

        if((time[4]-'0') != 2 && (time[4]-'0')){

            if(day <= days[(time[4]-'0')-1])
                cnt++;


        }else if(time[4]-'0'){

            int year = (time[0]-'0')*1000 + (time[1]-'0')*100 + (time[2]-'0')*10 + (time[3]-'0');

            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){

                if(day <= 29)
                    cnt++;
                
            }else{

                if(day <= 28)
                    cnt++;

            }

        }



        // 2 - 1

        int month = (time[4]-'0')*10+time[5]-'0';

        if(month <= 12 && month)
            cnt++;


        return cnt;
    }else{


        int month = (time[4]-'0')*10+time[5]-'0';
        int day = (time[6]-'0')*10+time[7]-'0';

        if(month && month <= 12){
            if(month == 2){

                int year = (time[0]-'0')*1000 + (time[1]-'0')*100 + (time[2]-'0')*10 + (time[3]-'0');

                if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                    if(day <= 29) return 1;
                }else{
                    if(day <= 28) return 1;
                }

            }else{
                if(day <= days[month-1]) return 1;
            }
        }


        return 0;
    }

}





int main(){

    int i, j, k, i1, i2, t1, t2;
    
    int n;
    cin >> n;

    while(n--){

        string year;
        cin >> year;

        string p1 = year + string(1, year[1]) + string(1, year[0]);
        string p2 = year + string(1, year[2]) + string(1, year[1]) + string(1, year[0]);
        string p3 = year + string(1, year[3]) + string(1, year[2]) + string(1, year[1]) + string(1, year[0]);

        cout << rt(p1) + rt(p2) + rt(p3) << " ";
        if(rt(p1)) cout << p1 << " ";
        if(rt(p2) == 2) cout << p2 << " " << p2 << " ";
        if(rt(p2) == 1) cout << p2 << " ";
        if(rt(p3)) cout << p3 << " ";
        cout << "\n";

    }
    

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題12-3 除法",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 725"],
      code:
`#include <bits/stdc++.h>

using namespace std;
using ll = long long;

bool ci(int a, int b){
    
    bitset<10> app;

    for(int i=0;i<5;i++){
        app[a%10] = 1;
        a /= 10;
    }
    for(int i=0;i<5;i++){
        app[b%10] = 1;
        b /= 10;
    }
    return (app.count() == 10);
}


int main()
{
    int i, j, k, i1, i2, t1=INT_MIN, t2;

    int n;

    while(cin >> n && n){
        
        bool pr = 0;


        for(int f=1234;f<=98765/n;f++){
            int a = f * n;
            if(!ci(a, f)) continue;

            cout << setw(5) << setfill('0') << a
                 << " / "
                 << setw(5) << setfill('0') << f
                 << " = " << n << "\n";
            pr = 1;
        }

        if(!pr)
            cout << "There are no solutions for " << n << ".\n";

        cout << "\n";

    }


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題13-1 加總的代價",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "UVa 10954", "貪心"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, l = 0, i1, i2, t1, t2;
    
    int n;

    while(cin >> n && n){


        ll cost = 0;
        priority_queue<int, vector<int>, greater<int>> info;

        for(i=0;i<n;i++){
            cin >> t1;
            info.push(t1);
        }

        while(info.size() > 1){

            t1 = info.top();
            info.pop();

            t2 = info.top();
            info.pop();

            info.push(t1+t2);

            cost += t1 + t2;
        }

        cout << cost << "\n";
    }

    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題13-2 排隊買飲料",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "貪心"],
      code:
`# include <bits/stdc++.h>
using namespace std;
using ll = long long;



int main(){

    int i, j, k, i1, i2, t1, t2;
    
    
    int n, m;
    cin >> n >> m;

    priority_queue<int, vector<int>, greater<int>> clerk;
    


    for(i=0;i<m;i++){
        cin >> k;
        clerk.push(k);
    }

    for(i=0;i<n-m;i++){
        cin >> k;
        clerk.push(clerk.top() + k);
        clerk.pop();
    }

    while(clerk.size() > 1) clerk.pop();

    cout << clerk.top();


    return 0;
}`
    },
    {
      category: "sctb",
      title: "習題13-3 基地台",
      description: "這段程式碼很高冷，他沒有多說什麼...，只留下了一聲不屑的「哼」。",
      updated: "2025-09-18",
      tags: ["基礎", "APCS 2017-03-04", "貪心", "二分搜"],
      code:
`#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int n, k;
vector<int> pos;


bool ci(int r){

    int np = -1;

    int cnt = 0;
    for(auto p : pos){

        if(p <= np) continue;

        np = p + r;
        cnt++;

    }

    return cnt <= k;
}



int main()
{
    int i, j, i1, i2, t1=INT_MIN, t2;

    cin >> n >> k;
    for(i=0;i<n;i++){
        cin >> t1;
        pos.push_back(t1);
    }


    sort(pos.begin(), pos.end());


    int l = 0, r = (pos[pos.size()-1] - pos[0])+1, mid;

    while(l < r){
        
        mid = l+(r-l)/2;

        if(ci(mid)) r=mid;
        else l = mid+1;

    }

    cout << l;

    return 0;
}`
    }
  ]
};
