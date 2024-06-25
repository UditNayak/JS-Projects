#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

long subarrayDistinctValues(const vector<int>& arr, int k) {
    int n = arr.size();
    unordered_map<int, int> map;
    long count = 0;
    int i = 0, j = 0;

    while (j < n) {
        if (map.find(arr[j]) != map.end()) {
            map[arr[j]]++;
        } else {
            map[arr[j]] = 1;
        }

        while (map.size() > k) {
            map[arr[i]]--;
            if (map[arr[i]] == 0) {
                map.erase(arr[i]);
            }
            i++;
        }

        count += j - i + 1;
        j++;
    }

    return count;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << subarrayDistinctValues(arr, k) << endl;
    return 0;
}
