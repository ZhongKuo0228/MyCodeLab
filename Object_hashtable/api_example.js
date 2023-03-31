fetch(url)
    //API資料轉成object
    .then((response) => response.json())
    .then((data) => {
        console.log("API data:", data);
        cache[url] = data;
        return data;
    });
