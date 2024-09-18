async function createTableHeader(table){
    let tr=document.createElement("tr");
    let sno=document.createElement("th");sno.appendChild(document.createTextNode("sNo"));
    let artname=document.createElement("th");artname.appendChild(document.createTextNode("Artname"));
    let price=document.createElement("th");price.appendChild(document.createTextNode("Price"));
    let discountprice=document.createElement("th");discountprice.appendChild(document.createTextNode("Discountprice"));
    tr.append(artname);tr.append(price);tr.append(discountprice);
    table.append(tr);
}

async function createTableRow(table,row,i){
    let tr=document.createElement("tr");
    let sno=document.createElement("td");sno.appendChild(document.createTextNode(i));
    let artname=document.createElement("td");artname.appendChild(document.createTextNode(row.Artname));
    let price=document.createElement("td");price.appendChild(document.createTextNode(row.Price));
    let discountprice=document.createElement("td");discountprice.appendChild(document.createTextNode(row.Discountprice));
    tr.append(artname);tr.append(price);tr.append(discountprice);
    table.append(tr);
}


async function createTable(jsonURL,val) {

    let  pathname = null;

    if(val){
        pathname=jsonURL;
    }

    else{
        pathname= new URL(jsonURL);
    }
    
    const resp = await fetch(pathname);
    const json = await resp.json();
    console.log("=====JSON=====> {} ",json);
    
    const table = document.createElement('table');
    createTableHeader(table);
    json.data.forEach((row,i) => {

        createTableRow(table,row,(i+1));

      
    });
    
    return table;
}    

export default async function decorate(block) {
    const artgallerylist = block.querySelector('a[href$=".json"]');
    const parientDiv=document.createElement('div');
    parientDiv.classList.add('table-dynamic-block');

    if (artgallerylist) {
        parientDiv.append(await createTable(artgallerylist.href,null));
        artgallerylist.replaceWith(parientDiv);
        
    }
  
  }


 
  