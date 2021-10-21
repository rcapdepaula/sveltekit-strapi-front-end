<script context="module">

export async function get({ params: { slug } }) {

		const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);

		const Myarticle = await res.json()

		if (res.ok) {
			return {
				props: {
					article: Myarticle[0],
				}
			
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}

</script>

<script>
  let article =[]
</script>

<h1>
    {article.title}
	
</h1>
<p>
	{article.content}
</p>