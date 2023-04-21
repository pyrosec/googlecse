# googlecse

Scrape Google search

## Usage

#### How to create a Google Custom Search Engine API key and CX id

**CX id** : 

- Go to https://cse.google.com/cse/create/new to create a new search engine
- Fill the form with a fake domain site like `example.com`
- Select English as language
- Give any name to your search engine and click on Create button
- Go to https://cse.google.com/cse/all again and click on the search engine you just created.
- Select all entries in "Sites to search" and delete them
- Turn "Search the entire web" to ON
- Click on the "Search engine ID" button and copy your search engine id. This is the value for environment variable `GOOGLE_CSE_ID`

**CSE API key** :

- Go to https://console.developers.google.com/apis/credentials
- Click on "Create credentials" and select API key
- Copy the API key and click on close button. This is the value for environment variable `GOOGLE_API_KEY` field in the config.py file
- **Be sure to restrict the API key** to "Custom Search API"


#### CLI Usage

Install with

```sh
npm install -g
```

Use command via

```sh
googlecse "site:reddit.com best books on javascript"
```

Replace query here with your desired query. You may have to enable the API within Google developer console. The API result will give you the link if it wants you to do this.


## Author
project-ghost
