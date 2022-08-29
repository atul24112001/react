import { useRouter } from "next/router"

function SomethingPage() {
    const router = useRouter();
    console.log(router.query.newsId);

    return (<h1>The Something Page.</h1>);
}

export default SomethingPage;