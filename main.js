function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b)
    let flag = false;
    let binarySearch = (arr,low, high, k) => {
      let mid = Math.floor(low+(high-low)/2)//2
      if(low>=high){
          console.log(-1)
          return
      }
      if(arr[mid]===k){
          console.log(1);
          return;
      }
      if(arr[mid]<k){
         binarySearch(arr, mid+1, high,k);
  
      }
      if(arr[mid]>k){
        binarySearch(arr, low, high-1,k);
      }
  }
      binarySearch(arr,0,arr.length, k)
      if(flag){
          
      }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
