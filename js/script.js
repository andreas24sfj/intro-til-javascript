/*først fanger man opp elementene vi lnsker å manipulere fra index.html
*/

const mainContent = document.getElementById("content")
const mainImage = document.getElementById("img")
const gallery = document.getElementById("gallery")




console.log(gallery)

// console.log(mainContent)


const imageUrls = ["./public/images/katt1.jpg",
    "./public/images/katt2.jpg", 
    "./public/images/katt3.jpg", 
    "./public/images/katt4.jpg", 
    "./public/images/katt5.jpg"]
    

/*for å finne en tilfeldig index i imageUrls arrayet lager vi randomNum variabelen som gjør følgende:

math.random lager et tilfeldig nummer fra 0-1 */
    console.log(imageUrls.length)
    console.log(imageUrls[2])
    
    const randomNum = Math.floor(Math.random() * imageUrls.length)  /*random tall mellom 0 og 4(lengden av arrayet images*/
    // console.log(randomNum)

    // console.log(images[randomNum])
    
    // mainContent.textContent = randomNum

/* setter source til mainImage til en tilfeldig verdi fra imageUrls arrayet */

    mainImage.src = imageUrls[randomNum]

    // newImage.src="../images/katt2.jpg"
    

/* Her lager vi en loop som går igjennom alle elementer i imageUrls arrayet. 
med forEach kjøres koden innenfor {} hver gang til alle elementene er kjørt igjennom

url: referanseord for hvert element i imgeUrls arrayet

Dette skjer hver gang loopen kjøres:
1. Loopen ser på bruker newImage variabelen til å lage et nytt element
2. dette nye elementet får tilført en verdi i attributten src fra imageUrls arrayet
3. det nye elementet blir plassert i gallery(div med id="gallery") gjennom appendChild*/
    imageUrls.forEach(url => {
        const newImage = document.createElement("img")
        newImage.src = url


        gallery.appendChild(newImage)
    })
