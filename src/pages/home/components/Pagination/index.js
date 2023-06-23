export default function Pagination ({
    disabledPrev = false,
    disabledNext = false,
    onChangePagination = (type = "next") => {},
}) {
    return (
        <div className="ml-96 mt-4 -mb-5 join grid grid-cols-2 w-72">
            <button className="join-item btn btn-outline btn-sm" disabled={disabledPrev} onClick={() => onChangePagination("prev")}>
                Previous page
            </button>
            <button className="join-item btn btn-outline btn-sm" disabled={disabledNext} onClick={() => onChangePagination("next")}>
                Next Page
            </button>
        </div>
    )
}