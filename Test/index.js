var obj = {
    first: function() { console.log('first'); return this; },
    second: function() { console.log('second'); return this; },
    third: function() { console.log('third'); return this; }
};

obj.first().second().third();