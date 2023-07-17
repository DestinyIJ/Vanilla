document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector("#image-container")

    const count = 15;
    const apiAccessKey = 'kk7egCYXLHcm0YdUEcePwibHfuLjhCAlt4swZWdaolY'
    const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiAccessKey}&count=${count}`

    let isLoading = false;
    let imagesCount = imageContainer.childElementCount
    let imageToObserve = imagesCount > 5 ? imageContainer.children[imagesCount - 5] : null

    function displayPhotos(photosArray) {
        photosArray.forEach((photo) => {
            const item = document.createElement('a')
            item.setAttribute('href', photo.links.html)
            item.setAttribute('target', '_blank')

            const img = document.createElement('img')
            img.setAttribute('src', photo.urls.regular)
            img.setAttribute('alt', photo.alt_description)
            img.setAttribute('title', photo.alt_description)

            item.appendChild(img)

            imageContainer.appendChild(item)
        })
        imagesCount = imageContainer.childElementCount
        imageToObserve = imageContainer.children[imagesCount - 5]
        observer.observe(imageToObserve);
    }

    async function getPhotos() {
        try {
            const response = await fetch(apiURL)
            const photosArray = await response.json()
            displayPhotos(photosArray)
        } catch (error) {
            // alert(error.message)
            console.log(error)
        } finally {
            isLoading = false;
        }
    }


    function loadMoreContent(entries) {
        if (entries[0].isIntersecting && !isLoading) {
            isLoading = true;
            observer.disconnect()

            getPhotos()
        }
    }

    const observer = new IntersectionObserver(loadMoreContent, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.5 // Fully visible in the viewport triggers the callback
    });


    getPhotos()
})