const items = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad", "Tiruchirappalli", "Bareilly", "Aligarh", "Tiruppur", "Moradabad", "Mysore", "Gurgaon", "Alwar", "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Jalgaon", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Sangli", "Mangalore", "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon"];

items.sort();

// create root
const root = new makeNode('\0');

// insert words into trie
for (const item of items)
    addWord(item, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

text_box.addEventListener("keyup", handler);

function handler(e)                          // handles for each event
{
    const str = e.target.value;
    const prefixes = getPrefix(str,root);    // get all words with prefix

    console.log(prefixes);

    list.innerHTML = "";                     // reset at each function call

    var cnt=0;
    for (const prefix of prefixes)
    {
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${prefix.substring(0,str.length)}</b>${prefix.substring(str.length)}</li>`;
        cnt++;
        if (cnt===5)
            break;
    }

}

function handleClick(e)                     // handles mouse click: on clicking prediction, fill the text_box with it
{
    const text=e.innerText;
    text_box.value=text;
    query=text_box.value;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
}

handler({ target: { value: "" } });         // show the predictions at start, when text_box is empty

text_box.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        search();
    }
})
function search()
{
    query=text_box.value;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
}
