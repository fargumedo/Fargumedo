describe("React TodoMVC", () => {
    const TODO_ITEM_ONE = "Buy Milk"
    const TODO_ITEM_TWO = "Pay Rent"
    const TODO_ITEM_THREE = "Pickup Dry Cleaning"

    beforeEach(() => {
        cy.visit("http://localhost:8888")
    })

    it("adds a single todo", () => {        
        cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".todo-list li").should("have.length", 1)
    })

    it("adds three todos", () => {
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)
        cy.get(".todo-list li").should("have.length", 3)
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
        cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
        cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
    })

    it("should append new items to the bottom of the list", () => {
        cy.createDefaultTodos()
        cy.get(".todo-list li").should("have.length", 3)

        //Todo 1
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)

        //Todo2
        cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)

        //Todo3
        cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)

        cy.get(".todo-count").contains("3 items left")
    })

    it.only("adds three todos", () => {
        cy.createDefaultTodos().as("todos")
        cy.get("@todos").should("have.length", 3)
    })

})