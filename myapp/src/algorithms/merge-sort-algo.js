let swapsArr = [];


function nextGap(gap)
{
	if (gap <= 1)
			return 0;
		return Math.floor(Math.ceil(gap / 2.0));
}

// Function for swapping
function swap(nums,i,j)
{
  if(i == j) return;
  swapsArr.push([i, j, 3]);
  swapsArr.push([i, j, 1]);

	let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
}

// Merging the subarrays using shell sorting
	// Time Complexity: O(nlog n)
	// Space Complexity: O(1)
function inPlaceMerge(nums,start,end)
{
	let gap = end - start + 1;
		for (gap = nextGap(gap); gap > 0;
			gap = nextGap(gap)) {
			for (let i = start; i + gap <= end; i++) {
				let j = i + gap;
        swapsArr.push([i, j, 2]);
				if (nums[i] > nums[j])
					swap(nums, i, j);
			}
		}
}

// merge sort makes log n recursive calls
	// and each time calls merge()
	// which takes nlog n steps
	// Time Complexity: O(n*log n + 2((n/2)*log(n/2)) +
	// 4((n/4)*log(n/4)) +.....+ 1)
	// Time Complexity: O(logn*(n*log n))
	// i.e. O(n*(logn)^2)
	// Space Complexity: O(1)
function recmergeSort(nums,s,e)
{
	if (s == e)
			return;

		// Calculating mid to slice the
		// array in two halves
		let mid = Math.floor((s + e) / 2);

		// Recursive calls to sort left
		// and right subarrays
		recmergeSort(nums, s, mid);
		recmergeSort(nums, mid + 1, e);
		inPlaceMerge(nums, s, e);
}

function mergeSort(arr){
  swapsArr = []
  let len = arr.length;
  let nums = [...arr];
  recmergeSort(nums, 0, len-1);
  return swapsArr;
}

export {mergeSort};
