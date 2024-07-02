function makeNode(ch)
{
    this.ch = ch;
    this.isTerminal = false;
    this.map = {};      // map stores the mapping char -> new link i.e, { 'a': node, ...}
    this.words = [];    // list of words with prefix
}

function addWord(str, root)
{
    n=str.length;
    t=str.toLowerCase();
    curr=root;
    for (var i=0;i<n;i++)
    {
        if (!curr.map[t[i]])  // if the char:node mapping is not present in map
            curr.map[t[i]] = new makeNode(t[i]);
        curr.words.push(str);   // push word to prefix
        curr=curr.map[t[i]];  // goto Ref node
    }
    curr.isTerminal=true;
}

function getPrefix(str, root)
{
    n=str.length;
    curr=root;
    t=str.toLowerCase();
    for (var i=0;i<n;i++)
    {
        if (!curr.map[t[i]])  // key not present in node, i.e. no prefix exists, return empty list
            return [];
        else           
         // move to Ref node
            curr=curr.map[t[i]];
    }
    return curr.words;          // return list of prefixes
}