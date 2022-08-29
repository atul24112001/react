export async function  getAllQuotes () {
    const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/quotes.json");
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Cant Fetch The Data.")
    }
    
    let transformedQuotes = [];             
    for(const key in data) {
        transformedQuotes.push({id: key, ...data[key]})
    }

    return transformedQuotes;
}

export async function  getSingleQuote (quoteId) {
    const response = await fetch(`https://react-http-b185e-default-rtdb.firebaseio.com/quotes/${quoteId}.json`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || "Cant Fetch The Data.")
    }
    
    let quote = {
        id: quoteId,
        ...data
    }

    return quote;
}
export async function  addQuote (quoteData) {
    const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/quotes.json", {
        method: "POST",
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || "Cant add The Quote.")
    }

    return null;
}
export async function  addComment (req) {
    const response = await fetch(`https://react-http-b185e-default-rtdb.firebaseio.com/comments/${req.quoteId}.json`, {
        method: "POST",
        body: JSON.stringify(req.CommentData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || "Cant add The Comment.")
    }

    return { commentId: data.name };
}
export async function  getAllComments (quoteId) {
    const response = await fetch(`https://react-http-b185e-default-rtdb.firebaseio.com/comments/${quoteId}.json`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Cant Fetch The Data.")
    }
    
    let transformedComments = [];             
    for(const key in data) {
        transformedComments.push({id: key, ...data[key]})
    }

    return transformedComments;
}