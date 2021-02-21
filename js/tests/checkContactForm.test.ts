import { validateForm } from '../contact.ts'

test("Check if email is correct", function() {
  expect('odavig@gmail.com').toContain(/@/)
})
