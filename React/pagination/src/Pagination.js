export const Pagination = ({total, limit, page, setPage}) => {
    //총 페이지 수 계산
    const numPages = Math.ceil(total / limit);

    const handlePreviousPage = () => {
        setPage(page - 1);
    }

    const handleNextPage = () => {
        setPage(page + 1);
    }

    return (
        <>
            <section>
                <button onClick={handlePreviousPage} disabled={page === 1}> previous</button>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <button key={i + 1} onClick={() => setPage(i + 1)}
                                aria-current={page === i + 1 ? 'page' : null}>
                            {i + 1}
                        </button>
                    ))}
                <button onClick={handleNextPage} disabled={page === numPages}> next</button>
            </section>
        </>
    )
}