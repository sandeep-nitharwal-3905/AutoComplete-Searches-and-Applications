const items = ["Ram", "Shyam", "Sandeep", "Hanuman", "Krishna", "Shiv"];
items.sort();

// create root
const root = new makeNode("\0");

// insert words into trie
for (const item of items) {
  addWord(item, root);
}

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

text_box.addEventListener("keyup", handler);

function handler(e) {
  // handles for each event
  const str = e.target.value;
  const prefixes = getPrefix(str, root);
  console.log(prefixes);

  list.innerHTML = "";
  var cnt = 0;
  for (const prefix of prefixes) {
    list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${prefix.substring(
      0,
      str.length
    )}</b>${prefix.substring(str.length)}</li>`;
    cnt++;
    if (cnt == 5) {
      break;
    }
  }
}

function handleClick(e) {
  const text = e.innerText;
  text_box.value = text;
  query = text_box.value;
  url = "http://www.google.com/search?q=" + query;
  window.open(url, "_blank");
}

handler({ target: { value: "" } });

text_box.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        search();
    }
})

function search() {
  console.log("Ram Ram Sa !");
  query = text_box.value;
  console.log(query);
  url = "http://www.google.com/search?q=" + query;
  window.open(url, "_blank");
}
