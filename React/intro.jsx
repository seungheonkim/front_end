
function APP() {
    const user = {
        firstName: 'kim',
        lastName: 'seung heon',
    }

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    return (
        <>
            <h1>
                Hello, {formatName(user)}!
            </h1>
        </>
    )
}