import { render, screen } from "@testing-library/react"
import ResturantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data", () => {
    render(<ResturantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Theobroma")

    expect(name).toBeInTheDocument() 
})