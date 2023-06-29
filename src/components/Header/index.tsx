import Icon from "../../assets/icon.png";

export function Header() {
    return (
        <header className="h-32 items-center flex justify-between px-32 absolute z-10 left-0 right-0 bottom-0 top-0">
            <img src={Icon} alt="" className="w-20" />

            <nav>
                <ul className="flex gap-8 font-medium">
                    <li className="text-gray-100 cursor-pointer text-lg hover:text-gray-50">About</li>
                    <li className="text-gray-100 cursor-pointer text-lg hover:text-gray-50">News</li>
                    <li className="text-gray-100 cursor-pointer text-lg hover:text-gray-50">Projects</li>
                    <li className="text-gray-100 cursor-pointer text-lg hover:text-gray-50">Contacts</li>
                </ul>
            </nav>
        </header>
    )
}