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

class registersteps {
	@And("User tap on register link")
	def Usertaponregisterlink() {

		Mobile.tap(findTestObject('Object Repository/Register/android.widget.Button (4)'), 0)
	}

	@And("User input (.*) , (.*) and (.*)")
	def Userinputfullnameemailandpassword(String fullname, String email, String password) {
		Mobile.tap(findTestObject('Object Repository/Register/android.widget.EditText - Alex Under, Fullname (2)'), 0)

		Mobile.setText(findTestObject('Object Repository/Register/android.widget.EditText - Alex Under, Fullname (3)'), fullname,
				0)

		Mobile.tap(findTestObject('Object Repository/Register/android.widget.EditText - alexemail.com, Email (2)'), 0)

		Mobile.setText(findTestObject('Object Repository/Register/android.widget.EditText - alexemail.com, Email (3)'), email,
				0)

		Mobile.tap(findTestObject('Object Repository/Register/android.widget.EditText - 123123123, Password (2)'), 0)

		Mobile.setText(findTestObject('Object Repository/Register/android.widget.EditText - 123123123, Password (3)'), password,
				0)

		Mobile.tap(findTestObject('android.register.Button'), 0)
	}

	@Then("User success register new account")
	def Usersuccessregisternewaccount() {
		
		Mobile.pressBack()

		Mobile.closeApplication()
	}

	@Then("User failed register new account")
	def Userfailderegisternewaccount() {
		Mobile.verifyElementVisible(findTestObject('android.register.Button'), 0)
		
		Mobile.pressBack()

		Mobile.closeApplication()
	}
}