import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class logoutsteps {

	@When("User already logged in with account")
	def Useralreadyloggedinwithaccount() {

		Mobile.tap(findTestObject('android.login.Button'), 0)

		Mobile.tap(findTestObject('Object Repository/Logout/android.widget.EditText - Email'), 0)

		Mobile.setText(findTestObject('Object Repository/Logout/android.widget.EditText - Email (1)'), 'zack@gmail.com', 0)

		Mobile.tap(findTestObject('Object Repository/Logout/android.widget.EditText - Password'), 0)

		Mobile.setText(findTestObject('Object Repository/Logout/android.widget.EditText - Password (1)'), 'zack123', 0)

		Mobile.tap(findTestObject('Object Repository/Logout/android.widget.Button (1)'), 0)
	}

	@And("User tap logout button on homepage")
	def Usertaplogoutbuttononhomepage() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/Logout/android.view.View'), 0)
	}

	@Then("User success logout")
	def Usersuccesslogout() {

		Mobile.pressBack()

		Mobile.closeApplication()
	}
}