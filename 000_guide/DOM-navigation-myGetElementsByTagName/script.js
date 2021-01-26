    function myGetElementsByTagName(nodeWhereSearch, tagNameForSearch) {
      // create array for searching element
      let found = [];
      // convert name to uppercase
      tagNameForSearch = tagNameForSearch.toUpperCase();

      // func for search tag in node of first level with recursion for search inside all nodes
      function explore(nodeWhereSearch) {
        // loop
        for (var i = 0; i < nodeWhereSearch.childNodes.length; i++) {
          var child = nodeWhereSearch.childNodes[i];
          console.log(i + ' - ', child);

          if (child.nodeType == document.ELEMENT_NODE) { // if value of el. nodeType equal 1(document.ELEMENT_NODE) do next step  find only all ELEMENT_NODE in document
            if (child.nodeName == tagNameForSearch) { // look at the nodeName == tagNameForSearch You also can use tagName here.
              found.push(child);
            }
            explore(child); // find element deeper an deeper
          }
        }
      }

      explore(nodeWhereSearch);
      return found;
    }

    console.log(myGetElementsByTagName(document.body, "h1").length);      // → 2
    // console.log(myGetElementsByTagName(document.body, "script").length);      // → 1
    console.log(myGetElementsByTagName(document.body, "span").length);    // → 4
    var para = document.querySelector("p");
    console.log(myGetElementsByTagName(para, "span").length);             // → 3

    // function byTagName(node, tagname) {
    //   var result = [];
    //   tagname = tagname.toUpperCase();
    //   // if (node.tagName === tagname) result.push(node);
    //
    //   function childCheck(child) {
    //     for (let i = 0; i < child.childNodes.length; ++i) {
    //       if (child.childNodes[i].tagName === tagname) result.push(child.childNodes[i]);
    //       if (child.childNodes[i].nodeType === document.ELEMENT_NODE) childCheck(child.childNodes[i]);
    //     }
    //   }
    //   childCheck(node);
    //   return result;
    // }
    // const body = document.body;
    // console.log(body);
    // console.log(byTagName(body, 'span'))
