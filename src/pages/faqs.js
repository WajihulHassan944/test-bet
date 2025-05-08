import Head from 'next/head'
import dynamic from 'next/dynamic'

const FrequentAskedQuestions = dynamic(
  () => import('@/Components/Footer/FrequentAskedQuestions'),
  {
    loading: () => <p>Loading...</p>,
  }
)

const FAQsPage = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>FAQs – Fantasy Boxing Game & League | Fantasy-MMadness</title>
        <meta 
          name="description" 
          content="Got questions about Fantasy-MMadness? Explore our FAQ section to learn more about fantasy boxing leagues, games, tokens, rewards, and sign-up benefits." 
        />
        <meta 
          name="keywords" 
          content="fantasy boxing, fantasy boxing game, fantasy boxing league, fantasy sports FAQ, how to play fantasy combat sports, Fantasy-MMadness questions" 
        />
        <meta property="og:title" content="FAQs – Fantasy Boxing League & Game Info" />
        <meta property="og:description" content="Find answers to your questions about fantasy boxing, token rewards, and how to play Fantasy-MMadness." />
        <meta property="og:image" content="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1746109925/mmuxewnnzsm3tvh3lzat.png" />
        <meta property="og:url" content="https://fantasymmadness.com/faqs" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs – Fantasy Boxing League & Game Info" />
        <meta name="twitter:description" content="Answers to common questions about fantasy boxing gameplay, leagues, tokens, and rewards." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1746109925/mmuxewnnzsm3tvh3lzat.png" />

        <link rel="icon" href="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1746109925/mmuxewnnzsm3tvh3lzat.png" />
      </Head>

      <FrequentAskedQuestions faqs={faqs} />
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://fantasymmadness-game-server-three.vercel.app/faqs")
    if (!response.ok) {
      throw new Error("Failed to fetch FAQs")
    }
    const data = await response.json()

    return {
      props: { faqs: data.data || [] },
    }
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return { props: { faqs: [] } }
  }
}

export default FAQsPage
