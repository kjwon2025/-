import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems((prevItems) => {
            // 동일 상품 판별: id + 옵션 이름
            const existingIndex = prevItems.findIndex(
                (item) =>
                    item.id === newItem.id &&
                    item.optionLabel === newItem.optionLabel
            );

            if (existingIndex !== -1) {
                // 기존 상품이면 수량만 증가
                const updatedItems = [...prevItems];
                updatedItems[existingIndex] = {
                    ...updatedItems[existingIndex],
                    qty: updatedItems[existingIndex].qty + newItem.qty,
                    optionQty:
                        (updatedItems[existingIndex].optionQty || 0) +
                        (newItem.optionQty || 0),
                };
                return updatedItems;
            } else {
                // 새로운 상품이면 배열 끝에 추가
                return [...prevItems, newItem];
            }
        });
    };

    return (
        <CartContext.Provider value={{ items, setItems, addItem }}>
            {children}
        </CartContext.Provider>
    );
};
