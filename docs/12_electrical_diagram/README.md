# Electrical diagram

Before diving into PCB design, it's essential to discuss the broader context, particularly **Product Design**. We need to understand whether a PCB is necessary and, if so, what functions and components it will require. A PCB is essentially a carrier for components, albeit a crucial one, and is only a part of the entire design process.

When developing a product, it’s important to identify the **functions** the product must fulfill. These functions can range from something as simple as analog-to-digital conversion to something as complex as an automobile. For complex functions, we break them down into smaller sub-functions, and if necessary, further divide these into more manageable sub-sub-functions, and so on.

To maintain clarity and avoid excessive subdivisions, we use a hierarchical terminology: **system** at the highest level, **product** at the next level, followed by **module**, and finally **function** at the lowest level. A function consists of **components**.

We continue breaking down the hierarchy until we have enough detail to work concretely with components, modules, products, or systems to achieve the desired function.

It's important to note that these terms are flexible depending on your perspective. For example, what one car assembly plant calls a component might be considered a complete system by the supplier.

Therefore, we will use the terms function, product, module, and system somewhat interchangeably. Always pay close attention to the context. The good news is that each level is structurally similar, making it easy to combine functions and upgrade them to modules or products.

## Functions

![Function](./images/afbeelding1.png)

Every function essentially has an **input** and an **output**. The function is responsible for correctly **converting** the input into the desired output. Note that there can be multiple inputs and multiple outputs. This can be achieved with a single function or several functions working together, as explained above.

Also, some inputs and outputs are inherent to the product itself. For example, consider a game controller. Inputs include button presses, joystick movements, and trigger pulls, while outputs might include haptic feedback and LED indicators. The device must therefore provide the necessary inputs (such as buttons and joysticks) and outputs (such as haptic motors and LEDs). The input elements are integral parts of the product.

The boundaries of function realization at the input and output can shift depending on what is desired and the degree of desired integration of the product. For instance, do we really want an integrated haptic feedback system or just a simple button press registration?

These types of small changes can have a significant impact on product realization.

Therefore, it is extremely important to clearly define the inputs and outputs, as well as the functions themselves, to avoid misunderstandings later on. A game controller is not the same as a console, even though it performs a crucial role in the overall gaming experience.

## Requirements 

Good and accurate detailing of input and output is crucial for finding the right solution. The more details you have, the more accurate and precise the solution will be. It is important to regularly test and validate this list with stakeholders.

Be cautious of **Feature Creep**, where new elements are constantly being added as input or output under the guise of *clarifications*.

We can divide functions and their associated requirements into two groups:

**Direct Functions – Functional Requirements**

These create a direct link between input and output and are typically commercial in nature. These are **Functional Requirements**, which are requirements the product must meet functionally. For example, creating an audio amplifier with 2 inputs and a 2x50W output.

**Indirect Functions – Non-Functional Requirements**

Indirect functions support and enhance direct functions. Examples include a power supply or mechanical housing, which may also be defined by maximum size, among other parameters. Additionally, factors such as safety, EMC, legal requirements (often varying by country/region), environment, and lifespan fall under this category. These indirect functions are often assumed but are not always clearly defined or remembered. These can also be considered inputs or outputs. The better they are defined, the better the final product will be. They are also called **Functional (non-commercial) Requirements** and often serve as preconditions for the functions and the product.

**Note**

Non-functional requirements, which are generally valid for various purposes, are often separated and listed independently. This is because specific teams, usually part of a **Quality** and/or **Reliability** Team, have the knowledge and skills to monitor and follow up on these requirements, especially legal ones.

## Architecture

If we examine a product or function closely, we notice a consistent design pattern in modern electronics. Thanks to the digital revolution and the advanced integration and capabilities of microcontrollers and software, circuits are now built from standardized components. This evolution has led to a clear classification into various groups, including two special categories: Power and Control. These two functions represent an integration of the power and control aspects of each individual function, a step that was taken years ago.

![GENERALPRODUCTARCHITECTURE](./images/afbeelding2.png)

### Power

Every electronic product, and therefore every electronic function, requires a power supply. This can come from the mains voltage (230V AC in Europe) without backup if the power fails, or from battery power. Although AC-derived DC voltage shares many similarities with battery supply, there are several crucial differences during normal operation:

* **Start-up and shutdown behavior**: A battery-powered device might start up only 1-2 times during its lifespan, whereas a mains-powered device may start up more frequently, even multiple times a day or an hour. Therefore, resetting must be handled differently, and certain components may always need to retain their properties under tension (e.g., GSM).
* **Power interruptions**: Battery-powered devices are rarely affected by power interruptions, although consideration must be given to the potential removal or intermittent contact of batteries (e.g., remote controls).
* **Power consumption**: Battery-powered devices typically consume less power and operate at lower supply voltages (e.g., 5V max), while 230V AC-powered devices may encounter large inrush currents and associated electromagnetic interference.

#### Hard vs. Soft Switch

Many 230V AC-powered devices are continuously under voltage, either fully or partially. Completely removing the voltage can be done via a hard ON/OFF switch or by unplugging the power cord.

In addition to a hard ON/OFF switch, often required by law, there is a **soft switch** controlled by a microprocessor. While the main components are disconnected from power, a small part of the circuits remains operational. This keeps the device **alive** to read its status, for example.

However, this involves significant power losses (converting 230V AC to 3.3V DC at a current of a few mA is inefficient). Some devices use a rechargeable battery that charges during normal operation with high efficiency. Once charged, the device switches off and runs entirely on battery power. If the battery voltage drops too much, the sub-circuit recharges the battery by switching on the 230V network, then disconnects again. This is particularly useful for devices with long off-modes compared to on-modes. Certain lighting units are a good example of this.

#### Interference

There is a good chance that the power supply is shared between different sub-functions. Drawing up a **power balance** is essential. Additionally, power supplies need to be sufficiently **decoupled** to prevent interference between modules and external functions.

### Control

Both the functions and the power supply need to be controlled and monitored. Previously, this was often done through direct interfaces, but now it is usually managed by a control architecture consisting of a microcontroller (µC) or microprocessor (µP) with associated memory and software.

The control is achieved using digital ON/OFF signals, such as ENABLE or RESET I/Os, and digital buses like I²C, SPI, or UART.

This control architecture also provides the User Interface (UI), which often includes a touch screen display, along with several physical buttons and switches. This forms the primary interface with the user.

It's important to note that not all sub-functions have a Control Interface, though it is typically desirable, such as with a RESET function.

## Documentation

Creating a solid architecture for a product or function requires thorough documentation of that architecture. These documents serve as references for all decisions made in the past. While it is ideal to have a single comprehensive document, it is often more practical to use several documents in different formats for various purposes. 

It is important to note that these documents should not be restricted to a select group of designers. Properly prepared documentation will be used by departments such as production, service, and especially software development, as a reference. Sometimes these departments may need to add or omit information, but often they can use the documents directly. Therefore, it is crucial to coordinate with these teams to understand their requirements and preferences for the documentation.

### Product Architecture Overview

This is the most important document. It provides an overview of all functions, preferably in a graphic format. This can also be done for each sub-function within an overarching Architecture Document.

![AUDIO-VIDEO-ARCHITECTURE-DOCUMENT](./images/afbeelding3.png)

### PCB Overview

This document offers a graphical overview of various PCBs, highlighting their physical properties, positions, and diversity. It may also include significant interfaces. The document is available here and can be combined with the "Product Architecture Overview" document.

![PCB-OVERVIEW](./images/afbeelding4.png)

### I/O Interface Overview

This section is also a part of the "Product Architecture Overview" document, but it provides more detailed information on each function and interface. 

A separate (Excel) document will be needed to cover the electrical and mechanical aspects. You will create an overview for each interface and connector, similar to a datasheet. This overview should define the connector type, electrical voltage levels, and possibly the maximum currents per pin. Note that special interfaces, such as I²C and USB, can have their own specific overviews.

### Power Overview – Power Balance

This overview provides a clear depiction of how power supplies are interconnected and the expected voltages and currents at various points. It helps identify if any additional protection is needed. Additionally, it shows the power consumption of each function across different modes (ON, Hibernate, Standby, etc.).

![POWER-ARCHITECTURE](./images/afbeelding5.png)

### Start-Up, Shut-Down, and Reset Behavior

These behaviors are rarely given enough attention, yet they are often the cause of many designs that either fail to start properly or encounter issues during power interruptions. It involves documenting all possible power transitions for power supplies and interfaces in a timing diagram. By analyzing these diagrams, you can determine if additional RESET or ENABLE signals are necessary in your system.

![POWER-UP-TIMINGS](./images/afbeelding6.png)

### Summary

Maintaining these documents throughout the entire development phase is crucial. When possible, try to combine overviews to reduce the workload, but be selective and make smart decisions about what to combine. Remember, these documents are not just for you, but for everyone involved in the development and production process. Regularly consult with relevant parties to understand what information they need and discuss the exact implementation details.

Ensure that the different overviews are consistent. Minimize placing the same information in multiple documents, though sometimes it may be unavoidable. Changes in one document can impact others, so discuss every change with the entire team. Use *Change Control* systems to ensure everyone is aware of changes and can implement them accordingly. Always practice good version management and proper naming of your documents.

:::tip 📑Note
Architecture documents are essential for building a PCB, both electrically and mechanically. Without them, starting a schematic or inputting data into a CAD system is pointless. 
:::

## Electrical Diagram

Once you have documented the basic architecture, you can start drawing the electrical diagram on paper. First, you will need to make decisions about which components or ready-to-buy systems you will use. For each component or system, you will need to consult the datasheet.

### Components & Datasheets

Datasheets contain all sorts of valuable information for your design:
- Electrical characteristics (voltage, current, resistance, etc.)
- Mechanical characteristics (footprint, measurements, thermal information, etc.)
- Basic circuits for specific usages

For instance, take the datasheet of the **LM386 from Texas Instruments**. It contains a lot of useful information for designing a product with that component. 




