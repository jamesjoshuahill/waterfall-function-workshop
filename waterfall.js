function asyncAddOne(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number'){ return callBack(new Error('need a number!')) }
    else { return callBack(null, x + 1) }
  }, 200)
}

function asyncDouble(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number') { return callBack(new Error('need a number!')) }
    else { return callBack(null, x * 2) }
  }, 200)
}

function asyncTimesTen(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number') { return callBack(new Error('need a number!')) }
    else { return callBack(null, x * 10) }
  }, 200)
}

// Create this function!
function waterfall(arg, tasks, cb) {
  tasks[0](arg, function(error, result) {
    if (error) {
      cb(error, result);
      return;
    }

    tasks[1](result, function(error, result) {
      if (error) {
        cb(error, result);
        return;
      }

      tasks[2](result, function(error, result) {
        cb(error, result);
      });
    });
  });
}

waterfall(3, [
  asyncAddOne,
  asyncDouble,
  asyncTimesTen
], function(error, result) {
  console.log('Test 1');
  if (error) {
    console.log('test failed, ' + error)
  }
  else if (result !== 80) {
    console.log('test failed, expected 80 but got', result)
  }
  else {
    console.log('Test 1 passed!')
  }
})
