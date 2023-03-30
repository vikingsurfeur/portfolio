import HeadPage from "@/components/HeadPage";
import { baseUrlApi, envResolver } from "@/lib/envResolver";

const Home = () => {
    return (
        <>
            <HeadPage
                title="David Bouscarle | Photography | Home"
                description="David Bouscarle, a landscape and nature photographer 
                from the Luberon region and based at the foot of Mont Ventoux, 
                invites you to discover his vision of natural beauty through his captivating photographs. 
                Passionate about forests and mountains, David travels to the most beautiful 
                places in the region and around the world to capture timeless and striking images. 
                Explore his portfolio and let yourself be transported into a world of serenity and wonder. 
                Contact David for collaborative projects, art print sales. 
                Boost your inspiration with with David Bouscarle's photographs."
            />
            <main></main>
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch(`${baseUrlApi}/users?lastName=Bouscarle`, {
        headers: {
            Authorization: `Bearer ${envResolver.apiKey}`,
        },
    });
    const user = await res.json();

    return {
        props: {
            user: user[0],
        },
    };
}

export default Home;
